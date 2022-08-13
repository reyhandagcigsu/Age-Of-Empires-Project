import { render as rtlRender, screen } from "@testing-library/react";
import Filter from "../components/Filter";
import { Provider } from "react-redux";
import store from "../redux/store";
import userEvent from "@testing-library/user-event";

const render = (component) =>
  rtlRender(
    <Provider store={store}>
      {component}
    </Provider>
  );


describe('Filter Component', () => {

  test('Ages Header', () => {
    render(<Filter /> );
    expect(screen.getByText('Ages')).toBeInTheDocument;
  });


  it('should render filterByAgesHandler when clicked', () => {
    // render your component
    render(<Filter />) 
    // access your button
    const button = screen.getByTestId('filterByAgesHandlerButton') 
    // simulate button click
    userEvent.click(button); 

    // expect result
    await waitFor(() =>  
        expect(screen.getByText("Some content")).toBeInTheDocument();
   });



});
