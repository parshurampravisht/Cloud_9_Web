export type BreadcrumbItem = {
    label: string;
    path?: string; // optional
};


export interface BreadCrumbProps {
    breadcrumbs?: BreadcrumbItem[];
    title?: string;
    description?: string;
}
