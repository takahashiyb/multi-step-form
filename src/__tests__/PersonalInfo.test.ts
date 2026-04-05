import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { useDataStore } from '@/stores/data'

describe('test personal info step', () => {
  beforeEach(() => {})

  it.todo('check missing name error message', () => {
    // submit with no name data
    // expect('error message appearing')
    // expect('no submit event')
    //// add name data
    // expect('no error code')
    // expect('submit event successful')
  })
  it.todo('check missing email error message', () => {
    //// submit with no email data
    // expect('error message appearing')
    // expect('no submit event')
    //// add email data
    // expect('no error code')
    // expect('submit event successful')
  })
  it.todo('check wrong email format error message', () => {
    //// submit with wrong email data
    // expect('error message appearing')
    // expect('no submit event')
    //// add correct email data
    // expect('no error code')
    // expect('submit event successful')
  })
  it.todo('check missing phone number error message', () => {
    //// submit with no phone number data
    // expect('error message appearing')
    // expect('no submit event')
    //// add phone number data
    // expect('no error code')
    // expect('submit event successful')
  })
})
