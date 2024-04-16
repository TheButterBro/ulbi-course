import { classNames } from "./classNames";

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    })
    test('with additional params', () => {
        expect(classNames('someClass', {}, ['additional', 'secondAdditional']))
            .toBe('someClass additional secondAdditional');
    })
    test('with additional and mods params', () => {
        expect(classNames('someClass', {hovered: true, draggable: true}, ['additional', 'secondAdditional']))
            .toBe('someClass additional secondAdditional hovered draggable');
    })
    test('with additional and mods with false params', () => {
            expect(classNames('someClass', {hovered: false, draggable: true}, ['additional', 'secondAdditional']))
                .toBe('someClass additional secondAdditional draggable');
    })
    test('with additional and mods with undefined params', () => {
            expect(classNames('someClass', {hovered: undefined, draggable: true}, ['additional', 'secondAdditional']))
                .toBe('someClass additional secondAdditional draggable');
    })
})