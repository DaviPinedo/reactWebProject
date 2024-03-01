import { Container, HeadContainer, InfoContainer } from "./styles";
import photo from '/perfil.jpeg';

function Home() {

  return (
    <Container>
      <HeadContainer>
        <div className="imgDiv">
          <img src={photo} alt="img" />
        </div>
        <div className="sideHeader">
          <h1>Davi Pinedo de Souza</h1>
          <div>
            <h2>Dados Pessoais</h2>
            <div className="headData">
              <p>Nacionalidade: Brasileiro</p>
              <p>Estado Civil: Solteiro</p>
              <p>Idade: 26 anos</p>
            </div>
            <div className="headData">
              <p>Celular: (11) 94889-9429</p>
              <p>Email: davi.pinedo97@gmail.com</p>
              <p>LinkedIn:<br/> <a href="https://linkedin.com/in/davi-pinedo-de-souza">https://linkedin.com/in/davi-pinedo-de-souza</a></p>
            </div>
          </div>
        </div>
      </HeadContainer>
      <InfoContainer>
        <h2>Formação Acadêmica</h2>
        <div>
          <h3>Ensino Médio</h3>
          <p>Situação: Completo</p>
          <p>Instituição: Escola Estadual Nossa Senhora da Penha</p>
          <p>Ano Início/Fim: 2012-2014</p>
        </div>
        <div>
          <h3>Ensino Técnico</h3>
          <p>Curso: Edificações</p>
          <p>Situação: Completo</p>
          <p>Instituição: IFSP - Instituto Federal de São Paulo</p>
          <p>Ano Início/Fim: 2013-2014</p>
        </div>
        <div>
          <h3>Graduação</h3>
          <p>Curso: Engenharia Civil</p>
          <p>Situação: Incompleto</p>
          <p>Instituição: FEI - Faculdade de Engenharia Industrial</p>
          <p>Ano Início/Fim: 2015</p>
        </div>
        <div>
          <h3>Graduação</h3>
          <p>Curso: Sistemas de Informação</p>
          <p>Situação: Completo</p>
          <p>Instituição: FIAP - Faculdade de Informática e Administração Paulista</p>
          <p>Ano Início/Fim: 2016-2019</p>
        </div>
        <div>
          <h3>MBA</h3>
          <p>Curso: Mobile Development</p>
          <p>Situação: Incompleto</p>
          <p>Instituição: FIAP - Faculdade de Informática e Administração Paulista</p>
          <p>Ano Início/Fim: 2023-2024</p>
        </div>
      </InfoContainer>
      <InfoContainer>
        <h2>Experiências Profissionais</h2>
        <div>
          <h3>Sigy Informática Ltda.</h3>
          <p>Período: 2016 - 2018</p>
          <p>Cargo: Estágio como Desenvolvedor Web</p>
        </div>
        <div>
          <h3>Mc1 Tecnologia Ltda.</h3>
          <p>Período: 2018 - 2022</p>
          <p>Cargo: Suporte N2/Desenvolvedor Android</p>
        </div>
        <div>
          <h3>Unike Technologies</h3>
          <p>Período: 2022 - 2023</p>
          <p>Cargo: Desenvolvedor Android</p>
        </div>
        <div>
          <h3>Mc1 Tecnologia Ltda.</h3>
          <p>Período: 2023 - Atual</p>
          <p>Cargo: Desenvolvedor Full Stack</p>
        </div>
      </InfoContainer>
    </Container>
    
  );
}

export { Home };
