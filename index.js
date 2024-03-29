import React from 'react';

const IndexPage = () => {
  return (
    <div>
      {/* Linha horizontal roxa no topo */}
      <div style={{ backgroundColor: '#6a1b9a', height: '75px', display: 'flex', alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          {/* Logo do CEUB */}
          <img src="/images/logo-ceub-colorida-02.png" alt="Logo CEUB" style={{ width: '120px', marginLeft: '20px' }} />
        </div>
        <div>
          {/* Botão Login */}
          <a href="/login" style={{ textDecoration: 'none', color: '#fff', marginRight: '10px', fontSize: '1.1rem' }}>Login</a>
          {/* Botão Register */}
          <a href="/register" style={{ textDecoration: 'none', color: '#fff', fontSize: '1.1rem' }}>Register</a>
        </div>
      </div>

      {/* Título e especialidades */}
      <div style={{ textAlign: 'center', padding: '50px' }}>
        {/* Título "Especialidades" com borda roxa */}
        <h1 style={{ fontSize: '2rem', marginBottom: '50px' }}>
          <span style={{ border: '2px solid #6a1b9a', padding: '10px' }}>Especialidades</span>
        </h1>
        {/* Texto "Clínica-Escola de Nutrição" com borda roxa */}
        <p style={{ fontSize: '1.2rem', marginBottom: '40px' }}>
          <span style={{ border: '2px solid #6a1b9a', padding: '10px' }}>Clínica-Escola de Nutrição</span>
        </p>

        {/* Espaço entre títulos e texto "Escolha sua especialidade" */}
        <div style={{ marginBottom: '50px' }}></div>

        {/* Texto "Escolha sua especialidade" */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <p style={{ fontSize: '1.5rem', marginBottom: '20px' }}>
            <span style={{ border: '2px solid #6a1b9a', padding: '10px' }}>Escolha sua especialidade</span>
          </p>
        </div>

        {/* Botões de especialidades */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          {/* Usando elementos <a> para navegar para a página de Nutrição Clínica */}
          <a href="/nutricao-clinica" style={{ textDecoration: 'none' }}>
            <button
              style={{
                backgroundColor: '#6a1b9a', // Cor roxa
                color: '#fff',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '1.1rem'
              }}
            >
              Nutrição Clínica
              <br />
              {/* Use o caminho relativo correto para a imagem */}
              <img src="/images/clinicanutricao.png" alt="Imagem Nutrição Clínica" style={{ width: '300px', marginTop: '10px' }} />
            </button>
          </a>
          {/* Usando elementos <a> para navegar para a página de Nutrição Esportiva */}
          <a href="/nutricao-esportiva" style={{ textDecoration: 'none' }}>
            <button
              style={{
                backgroundColor: '#6a1b9a', // Cor roxa
                color: '#fff',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '1.1rem'
              }}
            >
              Nutrição Esportiva
              <br />
              {/* Use o caminho relativo correto para a imagem */}
              <img src="/images/nutricaoesportiva.png" alt="Imagem Nutrição Esportiva" style={{ width: '337px', marginTop: '10px' }} />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
