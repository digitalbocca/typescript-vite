import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import AlertSuccess from '@/components/alert-success.vue'

import { filled, empty } from '../__mocks__/alert-success-mock'

describe('AlertSuccess', () => {
  it('should render correctly', () => {
    const wrapper = mount(AlertSuccess)

    const alertSuccessWrapper = wrapper.find('[data-test-id="alert-success"]')
    const alertSuccessTitle = wrapper.find('[data-test-id="alert-success-title"]')
    const alertSuccessContent = wrapper.find('[data-test-id="alert-success-content"]')

    expect(alertSuccessWrapper.exists()).toBe(true)
    expect(alertSuccessTitle.exists()).toBe(true)
    expect(alertSuccessContent.exists()).toBe(true)
  })

  it('should render correctly with fullfilled data', () => {
    const wrapper = mount(AlertSuccess, {
      propsData: filled
    })

    expect(wrapper.html()).toContain(filled.title)
    expect(wrapper.html()).toContain(filled.content)
  })

  it('should render correctly with empty data', () => {
    const wrapper = mount(AlertSuccess, {
      propsData: empty
    })

    expect(wrapper.html()).not.toContain(filled.title)
    expect(wrapper.html()).not.toContain(filled.content)
  })
})
