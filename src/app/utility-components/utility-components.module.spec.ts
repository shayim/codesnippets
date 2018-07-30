import { UtilityComponentsModule } from './utility-components.module'

describe('UtilityComponentsModule', () => {
  let utilityComponentsModule: UtilityComponentsModule

  beforeEach(() => {
    utilityComponentsModule = new UtilityComponentsModule()
  })

  it('should create an instance', () => {
    expect(utilityComponentsModule).toBeTruthy()
  })
})
