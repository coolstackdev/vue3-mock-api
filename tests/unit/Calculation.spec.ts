import { shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';

import Calculation from '@/components/Calculation.vue';

describe('Calculation.vue', () => {
  let storeMock: any;
  let wrapper: any;

  beforeEach(() => {
    storeMock = createStore({});

    wrapper = shallowMount(Calculation, {
      global: {
        plugins: [storeMock],
      },
    });
  });

  it('renders `Submit` button', () => {
    const submitBtn = wrapper.find('button');
    expect(submitBtn.text()).toMatch('Submit');
  });

  it('dispatches `fetchResult` action when click `Submit` btn', async () => {
    const spyDispatch = jest.spyOn(storeMock, 'dispatch').mockImplementation();

    const number = 9;
    await wrapper.find('[data-number-input]').setValue(number);

    const submitBtn = wrapper.find('button');
    submitBtn.trigger('click');

    expect(spyDispatch).toHaveBeenCalledTimes(1);
    expect(spyDispatch).toHaveBeenCalledWith('fetchResult', number);
  });

  it('corrects number automatically when blur', async () => {
    const number = 23.56;
    const numberInput = wrapper.find('[data-number-input]');

    await numberInput.setValue(number);
    await numberInput.trigger('blur');

    expect(numberInput.element.value).toBe('24');
  });
});
