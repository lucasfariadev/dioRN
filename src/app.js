import React from 'react';

import {View, Text, Linking, Image, StyleSheet, SafeAreaView, StatusBar, Pressable} from 'react-native';
const colorGitHub = '#010409';
const colorFontGitHub = '#C9D1D9';
const colorDarkFontGitHub = '#4F565E';
const ImageProfileGitHub = 'https://avatars.githubusercontent.com/u/74054553?v=4';
const urlToMyGitHub = 'https://www.github.com/lucaslurf'

const App = ()=>{

    const handlePressGoToGitHub = async ()=>{
     console.log('Verificando link');
     const res = await  Linking.canOpenURL(urlToMyGitHub);
     if (res){
        console.log('link aprovado');
        console.log('abrindo link...');
        await Linking.openURL(urlToMyGitHub);
     }
    }

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGitHub} barStyle="light-content" />
        <View style={style.content}>
            <Image accessibilityLabel='Lucas de terno com fundo de lousa
             e com equações e um robo'
             style={style.avatar} source={{uri: ImageProfileGitHub}}></Image>

    <Text accessibilityLabel='Nome: Lucas Faria'
     style={[style.defaltText, style.name]}> Lucas Faria</Text>

    <Text accessibilityLabel='Nickname: lucaslurf'
     style={[style.defaltText, style.nickname]}>lucaslurf</Text>

    <Text accessibilityLabel='Descrição: Estudante Análise e Desenvolvimento de Sistemas -
         UNINOVE conhecimentos em: PYTHON | JAVA | HTML| CSS
          | JAVASCRIPT | BOOTSTRAP | SCRUM | '
     style={[style.defaltText, style.description]}>Estudante Análise e Desenvolvimento de Sistemas -
         UNINOVE conhecimentos em: PYTHON | JAVA | HTML| CSS
          | JAVASCRIPT | BOOTSTRAP | SCRUM |</Text>
        <Pressable onPress={handlePressGoToGitHub}>
          <View style={style.button}>
                <Text style={[ style.defaltText, style.textButton]}>
                  Open in GitHub
                </Text>
          </View>
        </Pressable>

    </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container:{
        //Colluns
        backgroundColor: colorGitHub,
        flex:1, //expandir para a tela toda.
        justifyContent: 'center',
        alignItems: 'center', //desnecessário
        //flexDirection: 'row', colococar ao lado (linhas)


   
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,

    },

    content: {

        alignItems: 'center',
        padding: 24,
    },

    defaltText: {
        color:'white',
        color: colorFontGitHub,
    },

    name:{
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
        
    },

    nickname:{
        fontSize: 18,
        color: colorDarkFontGitHub,
    },

    description: {
        fontSize: 14,
        fontWeight: 'bold',
    },

    button:{
        marginTop: 20,
        backgroundColor: colorDarkFontGitHub,
        borderRadius: 10,
        padding: 20,
    },

    textButton: {
        fontSize: 16,
        fontWeight: 'bold',
    }

   
});