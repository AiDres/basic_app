import AsyncStorage from '@react-native-async-storage/async-storage';
export default class U{
    static async setStorageItem(config){
        try {
            const jsonValue = JSON.stringify(config.value)
            await AsyncStorage.setItem(config.key, jsonValue)
        } catch (e) {
          // saving error
        }
    }
    static async getStorageItem(config){
        try {
            const jsonValue = await AsyncStorage.getItem(config.key)
            return jsonValue != null ? JSON.parse(jsonValue) : null
        } catch (e) {
          // geting error
        }
    }
    static async clearStorageAll(){
        try {
            await AsyncStorage.clear()
        } catch(e) {
        }
    }
}