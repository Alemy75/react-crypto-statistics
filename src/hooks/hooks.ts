import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux"
import { bindActionCreators } from "@reduxjs/toolkit"
import { coinsAction } from './../store/coins/coins.slice'
import { RootState } from "../store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const actions = {
	...coinsAction
}

export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(actions, dispatch)
}