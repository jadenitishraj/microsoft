
import React from "react";
import { render, screen, fireEvent  } from "@testing-library/react";
import AdminHeader from "./Header";
import HeaderForm from "./HeaderForm";
import { Provider } from "react-redux";
import store from '../../../store';
import "@testing-library/jest-dom/extend-expect"; // Import the necessary matchers



describe("testing Header Component", () => {
    it("should render the expected text", () => {
      render(<Provider store={store}><AdminHeader /></Provider>);
  
      const headerElement = screen.getByText("This is admin Header");

      expect(headerElement).toBeInTheDocument();
    });


    it("should call submitData function on button click", () => {
        const mockSubmitData = jest.fn();
        render(<HeaderForm submitData={mockSubmitData} />);
    
        const buttonElement = screen.getByRole("button");
        fireEvent.click(buttonElement);
    
        expect(mockSubmitData).toHaveBeenCalledTimes(1);
      });

      it("should call textChange function on input change", () => {
        const mockTextChange = jest.fn();
        render(<HeaderForm textChange={mockTextChange} />);
    
        const inputElement = screen.getByRole("textbox");
        fireEvent.change(inputElement, { target: { value: "Hello World" } });


        // expect(mockTextChange).toHaveBeenCalledWith(expect.objectContaining({ target: { value: "Hello World" } }));
        expect(mockTextChange).toHaveBeenCalledWith(expect.any(Object));
        expect(mockTextChange).toHaveBeenCalledTimes(1);
      });

  });