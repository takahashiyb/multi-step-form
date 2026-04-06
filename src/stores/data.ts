import { defineStore } from 'pinia'
import { ref } from 'vue'

interface Plan {
  id: number
  name: string
  nameCaps: string
  yearlyCost: number
  yearlyFree: number
  monthlyCost: number
  readonly icon: string
  readonly yearlyFormatted: string
  readonly free: string
  readonly monthlyFormatted: string
}

interface PersonalInfo {
  id: 'name' | 'email' | 'phone'
  value: string
  error: string
  label: string
  type: string
  placeholder: string
}

interface Addon {
  id: Number
  name: string
  nameCaps: string
  description: string
  yearlyCost: number
  monthlyCost: number
  readonly yearlyFormatted: string
  readonly monthlyFormatted: string
  value: boolean
}

function getYearlyCost(yearlyCost: number) {
  return '$' + yearlyCost + '/yr'
}

function getYearlyFree(yearlyFree: number) {
  return yearlyFree + 'months free'
}

function getMonthlyCost(monthlyCost: number) {
  return '$' + monthlyCost + '/mo'
}

export const useDataStore = defineStore('data', () => {
  const plans = ref<Plan[]>([
    {
      id: 0,
      name: 'arcade',
      nameCaps: 'Arcade',
      yearlyCost: 90,
      yearlyFree: 2,
      monthlyCost: 9,
      get icon() {
        return `../assets/images/icon-${this.name}.svg`
      },
      get yearlyFormatted() {
        return getYearlyCost(this.yearlyCost)
      },
      get free() {
        return getYearlyFree(this.yearlyFree)
      },
      get monthlyFormatted() {
        return getMonthlyCost(this.monthlyCost)
      },
    },
    {
      id: 1,
      name: 'advanced',
      nameCaps: 'Advanced',
      yearlyCost: 120,
      yearlyFree: 2,
      monthlyCost: 12,
      get icon() {
        return `../assets/images/icon-${this.name}.svg`
      },
      get yearlyFormatted() {
        return getYearlyCost(this.yearlyCost)
      },
      get free() {
        return getYearlyFree(this.yearlyFree)
      },
      get monthlyFormatted() {
        return getMonthlyCost(this.monthlyCost)
      },
    },
    {
      id: 2,
      name: 'pro',
      nameCaps: 'Pro',
      yearlyCost: 150,
      yearlyFree: 2,
      monthlyCost: 15,
      get icon() {
        return `../assets/images/icon-${this.name}.svg`
      },
      get yearlyFormatted() {
        return getYearlyCost(this.yearlyCost)
      },
      get free() {
        return getYearlyFree(this.yearlyFree)
      },
      get monthlyFormatted() {
        return getMonthlyCost(this.monthlyCost)
      },
    },
  ])

  const addons = ref<Addon[]>([
    {
      id: 0,
      name: 'online',
      nameCaps: 'Online service',
      description: 'Access to multiplayer games',
      monthlyCost: 1,
      yearlyCost: 10,
      get yearlyFormatted() {
        return '+' + getYearlyCost(this.yearlyCost)
      },
      get monthlyFormatted() {
        return '+' + getMonthlyCost(this.monthlyCost)
      },
      value: false,
    },
    {
      id: 1,
      name: 'storage',
      nameCaps: 'Large storage',
      description: 'Access to multiplayer games',
      monthlyCost: 2,
      yearlyCost: 20,
      get yearlyFormatted() {
        return '+' + getYearlyCost(this.yearlyCost)
      },
      get monthlyFormatted() {
        return '+' + getMonthlyCost(this.monthlyCost)
      },
      value: false,
    },
    {
      id: 2,
      name: 'custom',
      nameCaps: 'Customizable profile',
      description: 'Custom theme on your profile',
      monthlyCost: 2,
      yearlyCost: 20,
      get yearlyFormatted() {
        return '+' + getYearlyCost(this.yearlyCost)
      },
      get monthlyFormatted() {
        return '+' + getMonthlyCost(this.monthlyCost)
      },
      value: false,
    },
  ])

  const steps = ref([
    { id: 1, description: 'YOUR INFO' },
    { id: 2, description: 'SELECT PLAN' },
    { id: 3, description: 'ADD-ONS' },
    { id: 4, description: 'SUMMARY' },
  ])

  const step = ref(1)

  const personalInfo = ref<{
    name: PersonalInfo
    email: PersonalInfo
    phone: PersonalInfo
  }>({
    name: {
      id: 'name',
      value: '',
      error: '',
      label: 'Name',
      type: 'text',
      placeholder: 'e.g. Stephen King',
    },
    email: {
      id: 'email',
      value: '',
      error: '',
      label: 'Email Address',
      type: 'email',
      placeholder: 'e.g. stephenking@lorem.com',
    },
    phone: {
      id: 'phone',
      value: '',
      error: '',
      label: 'Phone Number',
      type: 'tel',
      placeholder: 'e.g. +1 234 567 890',
    },
  })

  const finalData = ref<{
    name: string | null
    email: string | null
    phone: string | null
    tier: Plan['id'] | null
    plan: string | null
    addons: Addon['id'][]
  }>({
    name: null,
    email: null,
    phone: null,
    tier: null,
    plan: null,
    addons: [],
  })

  const tier = ref<number | null>(null)

  const tierError = ref<boolean>(false)

  const isYearly = ref<boolean>(false)

  const isFinished = ref<boolean>(false)

  function backStep() {
    if (step.value === 1) return

    step.value--
  }

  function nextStep() {
    if (step.value === 4) return

    if (
      step.value === 1 &&
      Object.values(personalInfo.value).filter((i) => i.error === '').length === 3 &&
      Object.values(personalInfo.value).filter((i) => i.value !== '').length === 0
    ) {
      emptyfields()
      return
    }

    if (
      step.value === 1 &&
      Object.values(personalInfo.value).filter((i) => i.error === '').length === 3 &&
      Object.values(personalInfo.value).filter((i) => i.value === '').length === 0
    ) {
      step.value = 2
      return
    }

    if (step.value === 2 && tier.value === null) {
      tierError.value = true
      return
    }

    if (step.value === 2 && tier.value !== null) {
      step.value = 3
      return
    }

    if (step.value === 3) {
      step.value = 4
      return
    }
  }

  function completionStep() {
    if (step.value !== 4) return

    finalData.value!.name = personalInfo.value.name.value
    finalData.value!.email = personalInfo.value.email.value
    finalData.value!.phone = personalInfo.value.phone.value
    finalData.value!.tier = tier.value !== null ? tier.value : 0
    finalData.value!.plan = isYearly.value ? 'yearly' : 'monthly'
    finalData.value!.addons = addons.value
      .filter((i) => i.value)
      .map((i) => {
        return i.id
      })

    isFinished.value = true

    console.log(finalData.value)
  }

  function calculateTotal() {
    const tierPlan: number | undefined =
      plans.value[tier.value ? tier.value : 0]?.[isYearly.value ? 'yearlyCost' : 'monthlyCost']

    const isNoAddons: Boolean = addons.value.filter((i) => i.value === true).length > 0

    if (!tierPlan) return

    return (
      tierPlan +
      (isNoAddons
        ? addons.value
            .filter((i) => i.value)
            .map((a) => a[isYearly.value ? 'yearlyCost' : 'monthlyCost'])
            .reduce((a, b) => {
              return a + b
            })
        : 0)
    )
  }

  function showTotal() {
    return `+$${calculateTotal()}/${isYearly.value ? 'yr' : 'mo'}`
  }

  function checkValidity(event: Event, id: 'name' | 'email' | 'phone') {
    const input = event.target as HTMLInputElement
    const info = personalInfo.value[id]

    if (input.validity.valueMissing) {
      return (info.error = 'This field is required')
    }
    if (input.validity.typeMismatch) {
      return (info.error = 'requires valid Email Address')
    }
    if (input.validity) {
      info.error = input.validationMessage
    }
  }

  function resetField(id: 'name' | 'email' | 'phone') {
    personalInfo.value[id].error = ''
  }

  function emptyfields() {
    personalInfo.value.name.error = 'This field is required'
    personalInfo.value.email.error = 'This field is required'
    personalInfo.value.phone.error = 'This field is required'
  }

  function tierSelected() {
    tierError.value = false
  }

  function clickChangeButton() {
    step.value = 2
  }

  return {
    plans,
    addons,
    steps,
    step,
    tier,
    tierError,
    isYearly,
    isFinished,
    personalInfo,
    backStep,
    nextStep,
    completionStep,
    checkValidity,
    tierSelected,
    resetField,
    clickChangeButton,
    showTotal,
    finalData,
  }
})
