import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import App from '@/views/home.vue'

describe('Home', () => {
  it('should render correctly', () => {
    const wrapper = mount(App)
    expect(wrapper.html()).toContain('Home')
  })
})
