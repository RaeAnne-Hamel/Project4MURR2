import { shallowMount } from '@vue/test-utils'
import ProfileInfo from '@/components/ProfileInfo'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Points from '../../src/views/Points'
import { expect } from 'chai'

let wrapper
// Gotta go over tests today

describe('Points', () => {
  beforeEach(() => {
    wrapper = shallowMount(Points)
  })

  it('Should successfully updates first name', async () => {
    const inputFirst = wrapper.find('#firstName')
    await inputFirst.setValue('Tom')
    expect(wrapper.find('#firstName').text()).to.equal('Tom')
  })

  it('Should unsuccessfully update with too long first name', async () => {
    const inputFirst = wrapper.find('#firstName')
    await inputFirst.setValue('f'.repeat(21))
    expect(wrapper.find('#validInput').text()).to.equal('Unable to update profile information')
  })

  it('Should unsuccessfully update with too short first name', async () => {
    const inputFirst = wrapper.find('#firstName')
    await inputFirst.setValue('f')
    expect(wrapper.find('#validInput').text()).to.equal('Unable to update profile information')
  })

  it('Should successfully update with short last name', async () => {
    const inputLast = wrapper.find('#lastName')
    await inputLast.setValue('l')
    expect(wrapper.find('#validInput').text()).to.equal('Profile information has been updated')
  })

  it('Should unsuccessfully update with too long last name', async () => {
    const inputLast = wrapper.find('#lastName')
    await inputLast.setValue('l'.repeat(21))
    expect(wrapper.find('#validInput').text()).to.equal('Unable to update profile information')
  })

  it('Should successfully update with valid image file for profile picture', async () => {
    const inputPicture = wrapper.find('#picture')
    await inputPicture.setValue('C:/image.jpg')
    expect(wrapper.find('#validInput').text()).to.equal('Profile information has been updated')
  })

  it('Should unsuccessfully update with invalid image file for profile picture', async () => {
    const inputPicture = wrapper.find('#picture')
    await inputPicture.setValue('C:/image.jpg')
    expect(wrapper.find('#validInput').text()).to.equal('Unable to update profile information')
  })

  it('Should unsuccessfully update with all the inputs empty', async () => {
    const inputFirst = wrapper.find('#picture')
    const inputLast = wrapper.find('#lastName')
    const inputPicture = wrapper.find('#picture')

    await inputFirst.setValue('')
    await inputLast.setValue('')
    await inputPicture.setValue('')
    expect(wrapper.find('#validInput').text()).to.equal('Unable to update profile information')
  })
})
