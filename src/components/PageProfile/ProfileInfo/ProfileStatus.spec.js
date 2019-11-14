import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatusWithHooc component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="hi, this component is testing good"/>);
        const instance = component.getInstance();
        expect(instance.state.statusText).toBe("hi, this component is testing good");
    });
    test("status isn't should be span(isMode: false)", () => {
        const component = create(<ProfileStatus/>);
        const instance = component.getInstance();
        expect(instance.state.isMode).toBe(false);
    });
    test("span shouldn't be null", () => {
        const component = create(<ProfileStatus status="some text"/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNaN();
    });
    test("input shouldn't be render", () => {
        const component = create(<ProfileStatus status="some text"/>);
        const root = component.root;
        expect(() => root.findByType("input")).toThrow();
    });
    test("span should contains correct status", () => {
        const component = create(<ProfileStatus status="some text"/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("some text");
    });
    //check displayed input into edit mod instead of span
    test("input should be displayed into edit mod instead of span", () => {
        const component = create(<ProfileStatus status="some text"/>);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("some text");
    });

    test("callback should be called", () => {
        const someCallBack = jest.fn();
        //Прокидываем callback для проверки вызовится он или нет
        const component = create(<ProfileStatus status="some text"
                                                UpdateStatusProfilePageThunkCreator={someCallBack}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(someCallBack.mock.calls.length).toBe(1);
    })
});


