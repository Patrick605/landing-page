const pages = {
  inicio: `
    <section>
      <h2>🌱 Bem-vindo ao Ecoplay!</h2>
      <p>Aqui você aprenderá maneiras simples de cuidar do meio ambiente:</p>
      <ul>
        <li><a href="#" onclick="loadPage('reciclagem')">♻️ Como reciclar corretamente</a></li>
        <li><a href="#" onclick="loadPage('agua')">💧 Como economizar água</a></li>
        <li><a href="#" onclick="loadPage('energia')">⚡ Como usar energia de forma consciente</a></li>
      </ul>
    </section>
  `,
  reciclagem: `
    <section>
      <h2>♻️ Reciclagem</h2>
      <h3>Por que a reciclagem é importante?</h3>
      <p>A reciclagem reduz o lixo nos aterros, evita a poluição e transforma resíduos em novos produtos. 
      Além disso, economiza recursos naturais e gera empregos, promovendo desenvolvimento econômico e social.</p>
      <img src="https://123ecos.com.br/wp-content/uploads/2023/05/Sistemas-de-reciclagem.webp" width="300" alt="Sistema de Reciclagem">
      <p>Ela evita a retirada de novas matérias-primas da natureza, preservando florestas e rios, e reduz os custos de produção das indústrias.</p>
      <h2>♻️ Reciclagem e Coleta Seletiva</h2>
    <p>A Coleta Seletiva é uma estratégia ecológica que visa reciclar a quantidade excessiva de materiais descartados pelo homem.</p>
    <p>Os postos de reciclagem realizam serviços de tratamento de resíduos como, por exemplo, a coleta de óleo de cozinha usado. Além disso, a separação do lixo por categorias, dispostos em lixeiras com cores diferentes, facilita o processo de reciclagem e evita a contaminação de materiais.</p>

    <h3>🔵 Cores da Coleta Seletiva:</h3>
    <ul>
      <li>🔵 <strong>Azul:</strong> papéis e papelões</li>
      <li>🟢 <strong>Verde:</strong> vidros</li>
      <li>🔴 <strong>Vermelho:</strong> plásticos</li>
      <li>🟡 <strong>Amarelo:</strong> metais</li>
      <li>🟤 <strong>Marrom:</strong> resíduos orgânicos</li>
      <li>⚫ <strong>Preto:</strong> madeiras</li>
      <li>⚪ <strong>Branco:</strong> lixos hospitalares</li>
      <li>⚙️ <strong>Cinza:</strong> materiais não recicláveis</li>
      <li>🟠 <strong>Laranja:</strong> resíduos perigosos</li>
      <li>🟣 <strong>Roxo:</strong> resíduos radioativos</li>
    </ul>
     <h3>As principais formas de coleta seletiva são:</h3>
<ul> <li><strong> Postos de Entrega Voluntária (PEV):</strong> São locais espalhados 
pelos bairros onde você pode deixar seus resíduos em contêineres separados por tipo de material.</li> <li><strong> Postos de Troca:</strong> Você leva seus resíduos e recebe algo em troca, como sabão usado, em troca de óleo de cozinha, por exemplo.</li> <li><strong> Coleta Porta a Porta:</strong> Os recicláveis são recolhidos nas casas dos moradores em dias específicos da semana.</li> <li><strong>Programa Interno de Coleta Seletiva (PIC):</strong> Empresas ou órgãos públicos se unem a catadores para separar e recolher os recicláveis dentro da própria instituição.</li> </ul>


<h3>Curiosidades: Você Sabia?</h3>
      <li>📄 Cada 50 kg de papel reciclado evita que uma árvore seja cortada.</li>
      <li>🌳 Para cada tonelada de papel reutilizado, cerca de 20 árvores são poupadas.</li>
      <li>♻️ O mesmo papel pode ser reciclado de 7 a 10 vezes.</li>
      <li>🛍️ Sacolas plásticas de supermercado demoram 450 anos para se decompor no solo.</li>
      <li>🥫 Uma lata de alumínio demora de 80 a 100 anos para se decompor.</li>
      <li>🍾 O vidro pode demorar um milhão de anos para se decompor.</li>

  `,
  agua: `
    <section>
      <h2>💧 A Importância da Economia de Água</h2>
       <p>A água é um recurso vital para a vida em nosso planeta e devido a isso sua economia é crucial por 
       várias razões que impactam diretamente nosso meio ambiente, saúde e desenvolvimento sustentável.</p>

       <p>Saber usar a quantidade de água adequada garante disponibilidade para todos. Com o 
       crescimento da população e a urbanização acelerada, a demanda por água tem aumentado significativamente. 
       A deficiência hídrica já é uma realidade em muitas regiões do mundo, 
       e a economia de água torna-se fundamental para enfrentar esse desafio.</p>

       <p>Há várias maneiras de promover a economia de água no dia a dia. Desde pequenas ações, 
       como controle de vazamentos, 
       até práticas mais abrangentes, como o reuso da água.</p>

       <p>A economia de água não é apenas uma escolha sábia, mas uma responsabilidade compartilhada por todos. 
       Ao preservar a água, não estamos apenas cuidando do nosso presente, 
       mas garantindo um futuro sustentável para as próximas gerações e para o planeta como um todo.</p>

      <h3>Como economizar água?</h3>
      <ol>
        <li><strong>Banhos curtos:</strong> Reduza o tempo de banho para economizar até 90 litros.</li>
        <img src="https://conteudo.imguol.com.br/c/entretenimento/8f/2020/02/15/banho-chuveiro-1581776809378_v2_900x506.jpg" width="400" alt="Pessoa tomando banho">
        
        <li><strong>Feche a torneira:</strong> Enquanto escova os dentes ou ensaboa as mãos, mantenha a torneira fechada.</li>
        <img src="https://www.saaebandeirantes.com.br/public/admin/globalarq/uploads/images/escovar%20dentes.jpg" width="300" alt="Escovando os dentes">

        <li><strong>Louça eficiente:</strong> Ensaboe tudo antes de abrir a torneira para enxaguar.</li>
        <img src="https://img.freepik.com/vetores-gratis/ilustracao-de-desenho-animado-de-lavar-louca-desenhada-a-mao_23-2151063027.jpg" width="300" alt="Pessoa lavando louça">
       
<h3>💧 Dicas Extras para Economizar Água</h3>
<ul>
  <li>🚿 No banheiro: Use redutores de vazão, conserte vazamentos e reaproveite a água do banho.</li>
  <li>🍽️ Na cozinha: Lave frutas e louças com bacia, e só use a máquina de lavar cheia.</li>
  <li>🧺 Na lavanderia: Junte roupas para lavar de uma vez e reutilize a água do enxágue para pisos.</li>
</ul>

<h3>🌧️ Reaproveitamento da Água da Chuva</h3>
<p>Você pode instalar calhas e tonéis para captar a água da chuva e usá-la em tarefas como regar plantas, lavar o quintal ou dar descarga.</p>

<h3>🏠 Soluções Sustentáveis em Casa</h3>
<ul>
  <li>🚽 Descarga com duplo fluxo para usar só o necessário.</li>
  <li>💧 Irrigação por gotejamento em jardins, economizando até 80% da água.</li>
  <li>🔁 Sistemas de reuso doméstico de água para limpeza e vasos sanitários.</li>
</ul>

<h3> 👪🏽 Envolvendo a Família</h3>
<p>Crie hábitos em família para economizar água: incentive o fechamento da torneira, crie desafios semanais e use lembretes visuais perto das pias e chuveiros.</p>

 <h3>💬 Como conscientizar outras pessoas ao redor?</h3>
    <p>Depois que você conseguir colocar os novos hábitos em prática, é fundamental conversar com as pessoas sobre o consumo consciente de água e incentivar ações de economia desse recurso tão valioso.</p>
    
    <p>Essas ações também ajudam a reduzir o valor da conta de água, o que pode ser um ótimo argumento para engajar amigos, familiares e colegas.</p>
    
    <p>Em diversas regiões do país já é possível sentir os impactos da falta de preservação dos recursos hídricos, como:</p>
    <ul>
      <li>🚫 Desaparecimento de rios e nascentes</li>
      <li>💧 Escassez e racionamentos</li>
      <li>⚠️ Aumento da poluição da água</li>
      </ol>


    </section>
  `,
  energia: `
    <section>
      <h2>⚡ Uso Consciente de Energia</h2>
      <h3>Como economizar energia?</h3>
      <p>O uso consciente da energia elétrica ajuda o meio ambiente, reduz despesas e prolonga os recursos naturais. Veja como:</p>
      <ul>
        <li>Desligue luzes e aparelhos quando não estiver usando.</li>
        <li>Prefira lâmpadas LED, que são mais econômicas.</li>
        <li>Aproveite a luz natural sempre que possível.</li>
        <li>Evite deixar equipamentos em stand-by.</li>
        <li>Utilize eletrodomésticos eficientes (selo Procel A).</li>
      </ul>
      <img src="https://grupolar.com.br/wp-content/uploads/2023/05/dicas-para-economizar-energia-e1683653501386.jpg" width="400" alt="Pessoa desligando interruptor de energia">
      <h3>⚡ Quais os benefícios do consumo consciente de energia?</h3>

    <h3>💰 Economia</h3>
    <p>Ao desativar dispositivos eletrônicos quando não estão em uso, trocar lâmpadas incandescentes por LED e optar por eletrodomésticos mais eficientes, é possível obter uma diminuição significativa na conta de energia elétrica.</p>

    <p>Além disso, é aconselhável verificar a classificação de eficiência dos aparelhos, privilegiando aqueles na categoria A, que são mais eficazes e econômicos.</p>

    <p>Essas práticas beneficiam o orçamento doméstico ou de uma organização e também promovem uma pegada ambiental mais sustentável.</p>

    <h3>🌟 Reputação e Responsabilidade Social</h3>
    <p>Empresas que incorporam práticas de consumo consciente frequentemente conquistam uma reputação positiva na sociedade, atraindo consumidores que valorizam a responsabilidade social e ambiental.</p>

    <h3>⚙️ Melhora a Eficiência Operacional</h3>
    <p>A busca pela eficiência no uso de recursos pode levar a operações mais sustentáveis e economicamente eficazes. Reduzir desperdícios gera economia a longo prazo.</p>

    <h3>🌍 Redução da Pegada de Carbono</h3>
    <p>Além da redução no uso de energia elétrica, adotar fontes limpas ajuda a minimizar as emissões de gases do efeito estufa, contribuindo para a preservação do meio ambiente.</p>

    <h3>📋 Conformidade com Regulamentações</h3>
    <p>Estar em conformidade com normas ambientais evita penalidades e promove uma imagem ética e sustentável da empresa.</p>
    </section>
  `
};


function loadPage(page) {
  const container = document.getElementById('content');
  container.innerHTML = pages[page] || '<p>❌ Página não encontrada.</p>';
}


loadPage('inicio');
