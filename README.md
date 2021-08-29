# Introdução

Projeto baseado em um blog de notícias, onde cada usuário tem disponibilidade de criar, editar ou remover seus artigos, outros usuários estão incapacidatos de remover artigos de outro usuários.

## Instalação

### Clone os arquivos para sua maquína
    git clone https://github.com/Knyon1/Plathanus-Blog.git
    
### Os arquivos devem ficar assim
![image](https://user-images.githubusercontent.com/71739468/131248162-ae996da9-48ab-4f9e-92ac-8ab13951de83.png)

#### Instalando o Server
    cd server
    npm install
    docker run -d -p 27017:27017 -p 28017:28017 tutum/mongodb
    
    
Executando esse comando em seu terminal você esta criando um servidor que se comunica com um banco de dados que esta armazenado em um container pelo Docker.



#### 

        
 
##### Após esses comando o servidor já esta instlado na sua maquína, agora basta inciar ele

##### Pode-se usar ambos comandos abaixo, NPM RUN DEV ira necessitar o nodemon, já o NPM RUN START ira usar node.
    npm run dev
    npm run start


        

    

### Após clonar o repositório na sua maquína ( git clone https://github.com/Knyon1/Plathanus-Blog.git )


### Primeiro acesso

![alt text](https://i.imgur.com/bmkxJ9V.png)

#### Basta ir no botão acessar no canto superior direito para criar uma conta
______________________________________________________________________________________________________

### Acesso ou Cadastro

![alt text](https://i.imgur.com/AMLWgJx.png)

#### Como sera o primeiro acesso, devera primeiramente fazer o cadastro, podendo ser em conta google ou criando uma em cadastre-se.

![alt text](https://i.imgur.com/Bc71BDD.png)
______________________________________________________________________________________________________

### Usuário autenticado e pronto para criar artigos.

![alt text](https://i.imgur.com/kgsXKEY.png)
![alt text](https://i.imgur.com/qifChDk.png)
#### Para editar um artigo bastar procura-lo e clicar em editar 

![alt text](https://i.imgur.com/GePQqJn.pn)
#### Edite e clique em enviar

![alt text](https://i.imgur.com/o0RgfLh.png)
![alt text](https://i.imgur.com/g6Pslw5.png)

______________________________________________________________________________________________________

### Acessando um artigo

![alt text](https://i.imgur.com/xtTe9Tk.png)

#### Basta apenas escolher um e clicar nele que sera direcionado ao artigo postado
![alt text](https://i.imgur.com/Zlvyhco.png)

______________________________________________________________________________________________________

#### Para deletar um artigo, basta escolher e clicar em deletar


### Tecnologias usadas
    Front-end: React,Redux, @material-ui, Styled-components, axios e jwt.
    Back-end: Node, express, mongoose, bcryptjs, body-parse e cors.
    Database: MongoDB.
    Docker: Criando container para o MongoDB.
    GoogleAuth.
    


