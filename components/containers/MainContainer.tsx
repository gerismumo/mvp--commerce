import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View } from 'react-native'
import { initialWindowMetrics, SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const statusBarStyle = 'dark'

interface Props {
    children: React.ReactNode
}
const MainContainer:React.FC<Props> = ({children}) => {
  return (
    <SafeAreaProvider testID="main-container" initialMetrics={initialWindowMetrics}>
        <StatusBar style={statusBarStyle}/>
        <View>
            {children}
        </View>
    </SafeAreaProvider>
  )
}

export default MainContainer