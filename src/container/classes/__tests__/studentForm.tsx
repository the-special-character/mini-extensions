import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import StudentForm from "../studentForm";

test("rendering and submitting a basic Formik form", async () => {
  const handleSubmit = jest.fn();
  render(<StudentForm onSearch={handleSubmit} />);
  const user = userEvent.setup();

  await user.type(screen.getByTestId("txt_studentName"), "Mike");

  await user.click(screen.getByRole("button", { name: /Login/i }));

  await waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith(
      {
        studentName: "Mike",
      },
      expect.any(Object)
    )
  );
});
