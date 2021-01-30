import { shallowMount } from '@vue/test-utils';
import ColorPicker from '@/components/ColorPicker';
import convert from 'color-convert';

let wrapper = null

const propsData = {
  swatches: ['e3342f', '3490dc', 'f6993f', '38c172', 'fff']
}

beforeEach(() => (wrapper = shallowMount(ColorPicker, { propsData })))
afterEach(() => wrapper.destroy())

describe('ColorPicker', () => {
    describe('Swatches', () => {
      test('displays each color as an individual swatch', () => {
        const swatches = wrapper.findAll('.swatch')
        propsData.swatches.forEach((swatch, index) => {
            expect(swatches.at(index).attributes().style).toBe(
            `background: rgb(${convert.hex.rgb(swatch).join(', ')});`)
        })
    })

    test('sets the first swatch as the selected one by default', () => {
        const firstSwatch = wrapper.find('.swatch');
        expect(firstSwatch.classes()).toContain('active')
    })

    //  this test isn't passing?!?!
    test('makes the swatch active when clicked', () => {
        const targetSwatch = wrapper.findAll('.swatch').at(2)
          targetSwatch.trigger('click')
          expect(targetSwatch.classes()).toContain('active')
        })
    })
})