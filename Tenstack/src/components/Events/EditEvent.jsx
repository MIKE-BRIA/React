import { Link, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { fetchEvent, updateEvent, queryClient } from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";

export default function EditEvent() {
  const navigate = useNavigate();
  const params = useParams();
  const eventId = params.id;

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["events", eventId],
    queryFn: ({ signal }) => fetchEvent({ id: eventId, signal }),
  });

  //!optimistic updating using mutation
  const { mutate } = useMutation({
    mutationFn: updateEvent,
    //updating the ui immediatelly after mutation is applied
    onMutate: async (data) => {
      const newEvent = data.event;

      await queryClient.cancelQueries({ queryKey: ["events", eventId] });

      const previousEvent = queryClient.getQueryData(["events", eventId]);

      queryClient.setQueryData(["events", eventId], newEvent);

      return { previousEvent };
    },
    onError: (error, data, context) => {
      queryClient.setQueryData(["events", eventId], context.previousEvent);
    },
    onSettled: () => {
      queryClient.invalidateQueries(["events", eventId]);
    },
  });

  function handleSubmit(formData) {
    mutate({ id: eventId, event: formData });
    navigate("../");
  }

  function handleClose() {
    navigate("../");
  }

  let content;

  if (isPending) {
    content = (
      <div className="center">
        <LoadingIndicator />
      </div>
    );
  }

  if (isError) {
    content = (
      <>
        <ErrorBlock
          title="Failed to load event"
          message={
            error.info?.message ||
            "Failed to load event. Please check your input"
          }
        />
        <div className="form-actions">
          <Link to="../" className="button">
            Okay
          </Link>
        </div>
      </>
    );
  }

  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
    );
  }

  return <Modal onClose={handleClose}>{content}</Modal>;
}
