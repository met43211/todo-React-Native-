import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import optionsStyle from "../static/optionsStyles";

function Options({setTodos, setValue, value}) {
    function addTodo(){
        setTodos(prev=>[...prev, value])
        setValue('')
    }
    return ( 
        <View style={optionsStyle.options}>
            <TouchableOpacity style={optionsStyle.btn} disabled={value===''} onPress={()=>addTodo()}>
                <Text style={optionsStyle.btnText}>Создать</Text>
            </TouchableOpacity>
        </View>
     );
}

export default Options;