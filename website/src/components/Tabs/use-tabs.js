import { useCurrentState } from '@hooks'

const useTabs = ({ initialValue }) => {
  const [state, setState, currentRef] = useCurrentState(initialValue)
  return {
    state,
    setState,
    currentRef,
    bindings: {
      value: state,
      onChange: (val) => {
        setState(val)
      }
    }
  }
}

export default useTabs
