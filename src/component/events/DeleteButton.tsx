import { toast } from "sonner";
import { useDeleteEvent } from "../../hook/useDeleteEvent";
import { useLocation, useNavigate } from "react-router-dom";

const DeleteButton = ({ id }: { id: string }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { mutateAsync } = useDeleteEvent();

  const handleDelete = async () => {
    if (!id) {
      toast.error("Failed to delete event");
      return;
    }
    const toastId = toast.loading("Deleting event...");
    try {
      await mutateAsync(id);
      toast.success("Event deleted successfully!", { id: toastId });
      if (location.pathname.includes(`/event/${id}`)) {
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete event", { id: toastId });
    }
  };

  return (
    <div>
      <button
        onClick={handleDelete}
        className="text-sm px-3 py-1 rounded border bg-red-100 text-red-700 hover:bg-red-200 transition cursor-pointer"
      >
        Delete
      </button>
    </div>
  );
};

export default DeleteButton;
