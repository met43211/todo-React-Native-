import { Text, SafeAreaView, View } from "react-native";
import headerStyles from "../static/headerStyles";

function Header() {
    return ( 
        <View style={headerStyles.header}>
           <Text style={headerStyles.h}>Заметки</Text>
        </View>
     );
}

export default Header;