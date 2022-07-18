import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Card from '../src/components/Card.vue'

describe('Card.vue', () => {
  const contactList = ref([
    {
      icon: 'i-carbon-mobile',
      value: '5-555-666-777',
      desc: 'Mobile number',
    },
    {
      icon: 'i-carbon-email',
      value: 'example@gmail.com',
      desc: 'Email address',
    },
    {
      icon: 'i-carbon-flight-international',
      value: 'www.example.com',
      desc: 'Website address',
    },
  ])

  const socialList = ref([
    {
      icon: 'i-carbon-logo-facebook',
      link: 'https://www.facebook.com/',
    },
    {
      icon: 'i-carbon-logo-twitter',
      link: 'https://twitter.com/',
    },
    {
      icon: 'i-carbon-logo-instagram',
      link: 'https://www.instagram.com/',
    },
    {
      icon: 'i-carbon-logo-linkedin',
      link: 'https://www.linkedin.com/',
    },
  ])
  it('should render', () => {
    const wrapper = mount(Card, {
      props: {
        avatar: 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/02ac8fd2cdb040f5bc7d73b562518d97~tplv-k3u1fbpfcp-watermark.image',
        userName: 'John Doe',
        userRole: 'Mobile App Developer',
        socialList: socialList.value,
        contactList: contactList.value,
      },
    })
    expect(wrapper.text()).toContain('Mobile App Developer')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('footer bg color should be changed', () => {
    const wrapper = mount(Card, {
      props: {
        avatar: 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/02ac8fd2cdb040f5bc7d73b562518d97~tplv-k3u1fbpfcp-watermark.image',
        userName: 'John Doe',
        userRole: 'Mobile App Developer',
        socialList: socialList.value,
        contactList: contactList.value,
        footerBgColor: '#ff0000',
      },
    })
    const element: any = wrapper.find('.a-card__footer').element
    expect(element.style.background).toBe('rgb(255, 0, 0)')
  })

  it('footer icon color should be changed', () => {
    const wrapper = mount(Card, {
      props: {
        avatar: 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/02ac8fd2cdb040f5bc7d73b562518d97~tplv-k3u1fbpfcp-watermark.image',
        userName: 'John Doe',
        userRole: 'Mobile App Developer',
        socialList: socialList.value,
        contactList: contactList.value,
        footerIconColor: '#ff0000',
      },
    })
    const element: any = wrapper.find('.a-card__footer').element
    expect(element.style.color).toBe('rgb(255, 0, 0)')
  })

  it('default slot should render', () => {
    const wrapper = mount(Card, {
      slots: {
        default: '<div>default content</div>',
      },
    })
    expect(wrapper.find('.a-card__info').element.innerHTML).toBe('<div>default content</div>')
  })

  it('header slot should render', () => {
    const wrapper = mount(Card, {
      slots: {
        header: '<div>header content</div>',
      },
    })
    expect(wrapper.find('.a-card__head').element.innerHTML).toBe('<div>header content</div>')
  })

  it('footer slot should render', () => {
    const wrapper = mount(Card, {
      slots: {
        footer: '<div>footer content</div>',
      },
    })
    expect(wrapper.find('.a-card__footer').element.innerHTML).toBe('<div>footer content</div>')
  })

  it('content class should add success', () => {
    const wrapper = mount(Card, {
      props: {
        avatar: 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/02ac8fd2cdb040f5bc7d73b562518d97~tplv-k3u1fbpfcp-watermark.image',
        userName: 'John Doe',
        userRole: 'Mobile App Developer',
        socialList: socialList.value,
        contactList: contactList.value,
        wrapClass: 'content-class-test',
      },
    })
    expect(wrapper.find('.a-card__content').element.outerHTML).toContain('content-class-test')
  })

  it('content Object class  should add success', () => {
    const wrapper = mount(Card, {
      props: {
        avatar: 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/02ac8fd2cdb040f5bc7d73b562518d97~tplv-k3u1fbpfcp-watermark.image',
        userName: 'John Doe',
        userRole: 'Mobile App Developer',
        socialList: socialList.value,
        contactList: contactList.value,
        wrapClass: {
          'content-class-test': true,
          'content-class-test-2': false,
        },
      },
    })
    expect(wrapper.find('.a-card__content').element.outerHTML).toContain('content-class-test')
    expect(wrapper.find('.a-card__content').element.outerHTML.includes('content-class-test-2')).toBeFalsy()
  })

  it('content Array class  should add success', () => {
    const wrapper = mount(Card, {
      props: {
        avatar: 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/02ac8fd2cdb040f5bc7d73b562518d97~tplv-k3u1fbpfcp-watermark.image',
        userName: 'John Doe',
        userRole: 'Mobile App Developer',
        socialList: socialList.value,
        contactList: contactList.value,
        wrapClass: ['content-class-test', 'content-class-test-2'],
      },
    })
    expect(wrapper.find('.a-card__content').element.outerHTML).toContain('content-class-test')
    expect(wrapper.find('.a-card__content').element.outerHTML).toContain('content-class-test-2')
  })

  it('header class should add success', () => {
    const wrapper = mount(Card, {
      props: {
        avatar: 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/02ac8fd2cdb040f5bc7d73b562518d97~tplv-k3u1fbpfcp-watermark.image',
        userName: 'John Doe',
        userRole: 'Mobile App Developer',
        socialList: socialList.value,
        contactList: contactList.value,
        headerClass: 'header-class-test',
      },
    })
    expect(wrapper.find('.a-card__head').element.outerHTML).toContain('header-class-test')
  })

  it('header object class should add success', () => {
    const wrapper = mount(Card, {
      props: {
        avatar: 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/02ac8fd2cdb040f5bc7d73b562518d97~tplv-k3u1fbpfcp-watermark.image',
        userName: 'John Doe',
        userRole: 'Mobile App Developer',
        socialList: socialList.value,
        contactList: contactList.value,
        headerClass: 'header-class-test',
      },
    })
    expect(wrapper.find('.a-card__head').element.outerHTML).toContain('header-class-test')
    expect(wrapper.find('.a-card__head').element.outerHTML.includes('header-class-test-2')).toBeFalsy()
  })

  it('header Array class should add success', () => {
    const wrapper = mount(Card, {
      props: {
        avatar: 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/02ac8fd2cdb040f5bc7d73b562518d97~tplv-k3u1fbpfcp-watermark.image',
        userName: 'John Doe',
        userRole: 'Mobile App Developer',
        socialList: socialList.value,
        contactList: contactList.value,
        headerClass: ['header-class-test', 'header-class-test-2'],
      },
    })
    expect(wrapper.find('.a-card__head').element.outerHTML).toContain('header-class-test')
    expect(wrapper.find('.a-card__head').element.outerHTML).toContain('header-class-test-2')
  })

  it('footer class should add success', () => {
    const wrapper = mount(Card, {
      props: {
        avatar: 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/02ac8fd2cdb040f5bc7d73b562518d97~tplv-k3u1fbpfcp-watermark.image',
        userName: 'John Doe',
        userRole: 'Mobile App Developer',
        socialList: socialList.value,
        contactList: contactList.value,
        footerClass: 'footer-class-test',
      },
    })
    expect(wrapper.find('.a-card__footer').element.outerHTML).toContain('footer-class-test')
  })

  it('footer object class should add success', () => {
    const wrapper = mount(Card, {
      props: {
        avatar: 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/02ac8fd2cdb040f5bc7d73b562518d97~tplv-k3u1fbpfcp-watermark.image',
        userName: 'John Doe',
        userRole: 'Mobile App Developer',
        socialList: socialList.value,
        contactList: contactList.value,
        footerClass: {
          'footer-class-test': true,
          'footer-class-test-2': false,
        },
      },
    })
    expect(wrapper.find('.a-card__footer').element.outerHTML).toContain('footer-class-test')
    expect(wrapper.find('.a-card__footer').element.outerHTML.includes('footer-class-test-2')).toBeFalsy()
  })

  it('footer Array class should add success', () => {
    const wrapper = mount(Card, {
      props: {
        avatar: 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/02ac8fd2cdb040f5bc7d73b562518d97~tplv-k3u1fbpfcp-watermark.image',
        userName: 'John Doe',
        userRole: 'Mobile App Developer',
        socialList: socialList.value,
        contactList: contactList.value,
        footerClass: ['footer-class-test', 'footer-class-test-2'],
      },
    })
    expect(wrapper.find('.a-card__footer').element.outerHTML).toContain('footer-class-test')
    expect(wrapper.find('.a-card__footer').element.outerHTML).toContain('footer-class-test-2')
  })
})
