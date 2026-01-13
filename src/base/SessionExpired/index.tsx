import { DialogActions, DialogContent, Dialog, Button } from "@mui/material";

export default function Confirmation({
  open,
  content = "Session expired. Please log in again.",
  handleAction
}) {
  return (
    <Dialog maxWidth="xs" open={open}>
      <DialogContent dividers>{content}</DialogContent>
      <DialogActions>
        <Button onClick={handleAction}>Navigate to Login</Button>
      </DialogActions>
    </Dialog>
  );
}
