import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm Component", () => {
  test("renders available times in the select options", () => {
    const mockAvailableTimes = ["18:00", "19:00", "20:00"];

    render(<BookingForm availableTimes={mockAvailableTimes} />);

    mockAvailableTimes.forEach((time) => {
      const option = screen.getByText(time);
      expect(option).toBeInTheDocument();
    });
  });
});
