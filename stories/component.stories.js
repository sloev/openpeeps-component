import { action } from '@storybook/addon-actions'
import Component from '../src/index'
import FacesView from '../src/views/FacesView.svelte'
import PosesView from '../src/views/PosesView.svelte'
import AccessoriesView from '../src/views/AccessoriesView.svelte'

export default {
  title: 'Component',
  component: Component,
}

export const Faces = () => ({
  Component: FacesView,
  props: {},
})

export const Poses = () => ({
  Component: PosesView,
  props: {},
})

export const Accessories = () => ({
  Component: AccessoriesView,
  props: {},
})
