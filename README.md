# MSI Projeto

Projeto desenvolvido para o Hackathon Cooperativo da Fatec Ourinhos 2023, fornecido pela MSI Soluções. Este projeto utiliza Next.js 13.5.5, TypeScript, Tailwind CSS e SweetAlert 2.

## Como Iniciar

1. Clone o repositório

2. Instale as dependências com Yarn

3. Inicie o aplicativo

## Sobre o Projeto

Projeto desenvolvido para o Hackathon Cooperativo da Fatec Ourinhos 2023, fornecido pela MSI Soluções.

### Funcionalidades

Este projeto oferece as seguintes funcionalidades:

1. **Geração de Relatórios**: O sistema permite a geração de relatórios, fornecendo informações detalhadas sobre a presença dos funcionários.

2. **Hierarquia de Acesso**: O sistema possui uma hierarquia de acesso, com diferentes níveis de permissões para os usuários. Existem telas específicas para funcionários e supervisores, cada um com acesso a informações relevantes para suas funções.

3. **Múltiplos Filtros**: Os usuários podem aplicar múltiplos filtros para personalizar a visualização dos dados de acordo com suas necessidades. Isso facilita a busca e análise de informações específicas.

4. **Recuperação de Senha**: Os usuários podem recuperar suas senhas por meio da nova tela de "Recuperação de Senha". Basta inserir o email associado à conta e receberão uma verificação para criar uma nova senha.

5. **Responsividade**: O sistema é responsivo e suporta uma ampla gama de dispositivos, desde telas de 4K até dispositivos com tela pequena, como o Galaxy Fold (180px e outras resoluções). Isso garante uma experiência de usuário consistente em diferentes plataformas.

6. **Gerenciamento de Presença dos Funcionários na Obra**: Os supervisores têm a capacidade de gerenciar a presença dos funcionários diretamente a partir do sistema. Isso facilita o controle da presença e coordenação dos funcionários em diferentes obras.

7. **Registro de Presença via API de Geolocalização**: Os funcionários podem registrar sua presença de forma precisa e confiável usando uma API de geolocalização. O sistema obtém a localização atual do dispositivo do funcionário e registra a presença no local de obra. Isso garante um registro preciso da presença dos funcionários.

8. **Tempo Exato do Horário de Brasília a partir de API**: O sistema obtém o tempo exato do horário de Brasília a partir de uma API confiável. Isso garante que todas as informações de agendamento e registro de presença estejam sincronizadas com o horário local.

### Telas do Sistema

**Tela de Login**: Utilize a tela de login para acessar o sistema. O login é uma etapa meramente ilustrativa, e você não precisa inserir dados reais. A tela inclui a opção "Esqueceu a senha", onde você pode informar seu email corporativo para recuperá-la.

**Tela de Recuperação de Senha**: Na tela de recuperação de senha, insira o email associado à sua conta. Após submeter o email, você receberá uma verificação para criar uma nova senha. Isso permite que os usuários recuperem o acesso à conta em caso de esquecimento de senha.

**Tela do Funcionário**: Nesta tela, o funcionário pode visualizar o agendamento semanal de seu trabalho, incluindo o local da obra, horários e detalhes importantes para cada dia da semana. Há também uma aba de dúvidas disponível para esclarecer informações adicionais. /usuario - **Usuário Padrão:**: deilton

**Tela do Supervisor**: A tela do supervisor fornece uma visão geral em tempo real da presença dos funcionários em diferentes locais de obra. É possível gerenciar a presença dos funcionários, O supervisor pode acessar essa tela simplesmente pressionando "Entrar" na tela de login ou digitando "/dash" no navegador.

### Paleta de Cores

A paleta de cores deste projeto é baseada no site da MSI Ourinhos:

- **#ffffff** (Branco)
- **#093467** (Azul Escuro)
- **#1F97CA** (Azul Claro)
- **#8d60f5** (Roxo)

### Créditos

Este projeto foi desenvolvido por Deilton Pedro Junior.
