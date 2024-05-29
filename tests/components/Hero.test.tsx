import { render, screen } from "@testing-library/react";
import { it, expect, describe } from "vitest";
import UserEvent from "@testing-library/user-event";
import HeroSection from "../../src/components/hero";
import { PageInfo } from "../../src/types/types";
import { pageData } from "../../src/data/data";
import React from "react";

describe("HeroSection", () => {
  const renderComponent = (info: PageInfo[]) => {
    render(<HeroSection info={info} />);

    return {
      nextButton: screen.getAllByTestId("next-button")[0],
      previousButton: screen.getAllByTestId("previous-button")[0],
      title: screen.queryByRole("heading"),
      description: document.querySelector("p"),
    };
  };

  it("should not render any content if the 'info' prop is an empty array", () => {
    const { container } = render(<HeroSection info={[]} />);

    expect(container).toBeEmptyDOMElement();
  });

  it("should render the hero section with the correct content", () => {
    const { title, description } = renderComponent(pageData);

    expect(title).toHaveTextContent(pageData[0].title);
    expect(description).toHaveTextContent(pageData[0].description);
  });

  it("should change the content when next or previous button is clicked", async () => {
    const info: PageInfo[] = pageData;
    const { title, description, nextButton, previousButton } =
      renderComponent(info);
    const nextInfo = info[1];
    const previousInfo = info[0];

    const user = UserEvent.setup();

    expect(title).toHaveTextContent(previousInfo.title);
    expect(description).toHaveTextContent(previousInfo.description);

    await user.click(nextButton);

    expect(title).toHaveTextContent(nextInfo.title);
    expect(description).toHaveTextContent(nextInfo.description);

    await user.click(previousButton);

    expect(title).toHaveTextContent(previousInfo.title);
    expect(description).toHaveTextContent(previousInfo.description);
  });

  it("should change the content when right or left arrow key is pressed", async () => {
    const info: PageInfo[] = pageData;
    const { title, description } = renderComponent(info);
    const nextInfo = info[1];
    const previousInfo = info[0];

    const user = UserEvent.setup();

    expect(title).toHaveTextContent(previousInfo.title);
    expect(description).toHaveTextContent(previousInfo.description);

    await user.keyboard("{ArrowRight}");

    expect(title).toHaveTextContent(nextInfo.title);
    expect(description).toHaveTextContent(nextInfo.description);

    await user.keyboard("{ArrowLeft}");

    expect(title).toHaveTextContent(previousInfo.title);
    expect(description).toHaveTextContent(previousInfo.description);
  });
});
