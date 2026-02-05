# Propostas de Melhorias - Experiência Imersiva

**Cliente:** Casa Juliardi
**Data:** 02/02/2026
**Status:** Pendente de aprovação

---

## Contexto

Análise realizada no site atual (casajuliardi.com) para identificar oportunidades de criar uma experiência mais imersiva para os usuários. O site já possui uma base sólida com design premium, animações básicas e storytelling da família.

---

## 1. Experiências Visuais & Storytelling

### 1.1 Hero Fullscreen com Vídeo de Fundo
**Prioridade:** P0 | **Complexidade:** Baixa

Substituir o gradiente estático do hero por um vídeo looping da vinícola (vinhedos, produção, colheita). O vídeo institucional atual está na seção "essência" - terá mais impacto como background do hero.

**Implementação:**
- Vídeo muted, autoplay, loop
- Fallback para imagem em conexões lentas
- Overlay escuro para legibilidade do texto

---

### 1.2 Scroll Storytelling (Parallax Avançado)
**Prioridade:** P0 | **Complexidade:** Média

Transformar a timeline das 4 gerações em uma experiência de scroll-driven storytelling:
- Cada geração ocupa uma "cena" de 100vh
- Imagens aparecem/desaparecem com parallax
- Textos revelam-se conforme o scroll
- Transições suaves entre épocas (1920 → hoje)

**Referências:**
- Apple product pages
- Storytelling websites (awwwards)

---

### 1.3 Tour Virtual 360º da Vinícola
**Prioridade:** P3 | **Complexidade:** Alta

Embed de um tour virtual interativo mostrando:
- Parreirais
- Cave de envelhecimento
- Sala de degustação
- Vista da Serra Gaúcha

**Requisitos:**
- Captura fotográfica 360º no local
- Plataforma de hospedagem (Matterport, Kuula, etc.)

---

## 2. Experiência de Produto

### 2.1 Visualizador 3D das Garrafas
**Prioridade:** P3 | **Complexidade:** Alta

Modelo 3D interativo de cada vinho onde o usuário pode:
- Rotacionar a garrafa
- Zoom no rótulo
- Ver detalhes da numeração (1 de 250)

**Tecnologias:**
- Three.js ou Spline
- Modelos 3D das garrafas

---

### 2.2 Comparador de Vinhos
**Prioridade:** P2 | **Complexidade:** Média

Interface para comparar lado a lado:
- Notas de degustação
- Harmonizações
- Tempo de envelhecimento
- Gráfico radar das características

---

### 2.3 Experiência de "Unboxing Virtual"
**Prioridade:** P3 | **Complexidade:** Alta

Animação mostrando a abertura da caixa exclusiva, revelando a garrafa e seus detalhes premium.

**Formato:**
- Vídeo renderizado ou
- Animação interativa (Lottie/CSS)

---

## 3. Experiências Sensoriais

### 3.1 Trilha Sonora Ambiente
**Prioridade:** P2 | **Complexidade:** Baixa

Som sutil e opcional (botão toggle no canto):
- Sons da vinícola (pássaros, vento nos parreirais)
- Música clássica suave
- Aumenta a atmosfera premium

**Importante:** Sempre iniciar mutado, usuário ativa se quiser.

---

### 3.2 Notas de Degustação Interativas
**Prioridade:** P2 | **Complexidade:** Média

Ao passar o mouse nos aromas (frutas vermelhas, carvalho, etc.), mostrar:
- Ilustrações animadas do ingrediente
- Descrição sensorial expandida
- Indicador visual de intensidade

---

## 4. Interações Modernas

### 4.1 Cursor Contextual Aprimorado
**Prioridade:** P2 | **Complexidade:** Baixa

O site já tem custom cursor - expandir para:
- Mudar forma sobre vinhos (ícone de taça)
- Texto "Explorar" ao hover em seções clicáveis
- Animação de "arrastar" na timeline

---

### 4.2 Microinterações nos Cards de Vinho
**Prioridade:** P1 | **Complexidade:** Baixa

- Efeito de líquido ao hover (CSS animation)
- Badge animado mostrando numeração
- Reveal progressivo das informações
- Brilho sutil percorrendo a garrafa

---

### 4.3 Transições de Página Cinematográficas
**Prioridade:** P2 | **Complexidade:** Média

Ao navegar entre seções:
- Fade crossover suave
- Elementos que "voam" entre posições
- Loader temático entre páginas (rolha girando)

---

## 5. Funcionalidades de Engajamento

### 5.1 Quiz "Descubra Seu Vinho Ideal"
**Prioridade:** P1 | **Complexidade:** Média

Perguntas sobre preferências que recomendam o vinho perfeito:

**Perguntas sugeridas:**
1. Qual ocasião você está planejando?
2. Você prefere vinhos mais secos ou frutados?
3. Com qual tipo de comida pretende harmonizar?
4. Prefere tintos encorpados ou espumantes refrescantes?

**Resultado:** Recomendação personalizada com CTA para contato.

---

### 5.2 Contador de Garrafas Restantes (Live)
**Prioridade:** P2 | **Complexidade:** Média

Mostrar em tempo real quantas garrafas ainda estão disponíveis:
- "Restam apenas 47 de 250 garrafas da safra 2023"
- Cria senso de exclusividade e urgência
- Atualização manual ou integração com estoque

---

### 5.3 Storytelling da Sua Garrafa
**Prioridade:** P3 | **Complexidade:** Média

Campo onde o cliente informa o número da garrafa e recebe:
- Data de engarrafamento
- Lote específico
- Condições da safra
- Mensagem personalizada da família Juliardi

---

## 6. Localização & Turismo

### 6.1 Mapa Interativo da Serra Gaúcha
**Prioridade:** P2 | **Complexidade:** Baixa

Mostrar a localização em Garibaldi com:
- Mapa estilizado (matching design do site)
- Rota de acesso desde Porto Alegre
- Pontos turísticos próximos
- Botão para abrir no Google Maps/Waze

---

### 6.2 Agendamento de Visitas
**Prioridade:** P1 | **Complexidade:** Média

Calendário interativo para:
- Degustações privativas
- Tours guiados pela vinícola
- Eventos especiais (vindima, lançamentos)

**Integração:** Calendly ou sistema próprio

---

## Matriz de Priorização

| ID | Melhoria | Impacto | Complexidade | Prioridade |
|----|----------|---------|--------------|------------|
| 1.1 | Hero com vídeo | Alto | Baixa | **P0** |
| 1.2 | Scroll storytelling timeline | Alto | Média | **P0** |
| 5.1 | Quiz do vinho ideal | Alto | Média | **P1** |
| 4.2 | Microinterações cards | Médio | Baixa | **P1** |
| 6.2 | Agendamento de visitas | Alto | Média | **P1** |
| 5.2 | Contador garrafas live | Alto | Média | **P2** |
| 3.1 | Trilha sonora opcional | Médio | Baixa | **P2** |
| 4.1 | Cursor contextual | Médio | Baixa | **P2** |
| 2.2 | Comparador de vinhos | Médio | Média | **P2** |
| 6.1 | Mapa interativo | Médio | Baixa | **P2** |
| 3.2 | Notas degustação interativas | Médio | Média | **P2** |
| 4.3 | Transições cinematográficas | Médio | Média | **P2** |
| 1.3 | Tour virtual 360º | Alto | Alta | **P3** |
| 2.1 | Visualizador 3D | Alto | Alta | **P3** |
| 2.3 | Unboxing virtual | Médio | Alta | **P3** |
| 5.3 | Storytelling da garrafa | Médio | Média | **P3** |

---

## Progresso de Implementação

**Última atualização:** 05/02/2026

### ✅ Implementados

| ID | Melhoria | Data |
|----|----------|------|
| 1.1 | Hero Fullscreen com Vídeo de Fundo | 05/02/2026 |
| 1.2 | Scroll Storytelling (Timeline) | 05/02/2026 |
| 4.1 | Cursor Contextual Aprimorado | 05/02/2026 |
| 4.2 | Microinterações nos Cards de Vinho | 05/02/2026 |
| 6.1 | Mapa Interativo da Serra Gaúcha | 05/02/2026 |

### ⏳ Pendentes

| ID | Melhoria | Prioridade | Complexidade |
|----|----------|------------|--------------|
| 5.1 | Quiz "Descubra Seu Vinho Ideal" | P1 | Média |
| 6.2 | Agendamento de Visitas (Calendly) | P1 | Média |
| 5.2 | Contador de Garrafas Restantes | P2 | Média |
| 4.3 | Transições Cinematográficas | P2 | Média |
| 3.1 | Trilha Sonora Opcional | P2 | Baixa* |
| 2.2 | Comparador de Vinhos | P2 | Média |
| 3.2 | Notas de Degustação Interativas | P2 | Média |

*Precisa de arquivo de áudio

### 🔮 Requerem Assets Externos

| ID | Melhoria | O que precisa |
|----|----------|---------------|
| 1.3 | Tour Virtual 360º | Fotos 360º no local |
| 2.1 | Visualizador 3D Garrafas | Modelos 3D |
| 2.3 | Unboxing Virtual | Vídeo/animação |
| 5.3 | Storytelling da Garrafa | Dados de lotes |

---

## Próximos Passos

1. [x] ~~Apresentar propostas ao cliente~~
2. [x] ~~Definir escopo da primeira fase (P0 + P1)~~
3. [ ] Orçar produção de assets necessários (vídeos, fotos 360º, etc.)
4. [ ] Cronograma de implementação
5. [ ] Testes de usabilidade após cada fase

---

## Observações

- Todas as melhorias devem manter a identidade visual atual (preto + dourado)
- Performance mobile é prioridade (maioria do tráfego)
- Animações devem respeitar `prefers-reduced-motion`
- SEO não pode ser prejudicado pelas implementações
