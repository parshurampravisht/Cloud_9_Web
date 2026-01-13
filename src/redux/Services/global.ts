import { axiosInstance } from "../../helper/axios";
import { base_url, static_base_url, auth_url } from ".";

const handleResponse = (res) => {
  if (res.status === 200) {
    return res.data;
  }
  if (res.status === 204) {
    return "deleted";
  }
  return { error: true, msg: res.code };
};
export const getListService = async (serviceName = "", base = false) => {
  const response = await axiosInstance.get(
    `${base ? base_url : static_base_url}${serviceName}`
  );
  return handleResponse(response);
};

export const saveService = async (serviceName = "", payload: any, auth = false) => {
  const response = await axiosInstance.post(
    `${auth ? auth_url : base_url}${serviceName}`,
    payload
  );
  return handleResponse(response);
};

export const updateService = async (
  serviceName = "",
  payload: any,
  id: any
) => {
  const response = await axiosInstance.put(
    // `${base_url}${serviceName}${id}/${endPoints}`,
    `${base_url}${serviceName}/${id}`,
    payload
  );
  return handleResponse(response);
};

export const patchService = async (
  serviceName = "",
) => {
  const response = await axiosInstance.patch(
    // `${base_url}${serviceName}${id}/${endPoints}`,
    `${base_url}${serviceName}`
  );
  return handleResponse(response);
};

export const deleteService = async (serviceName = "", id: any) => {
  const response = await axiosInstance.delete(
    `${base_url}${serviceName}/${id}`
  );
  return handleResponse(response);
};
