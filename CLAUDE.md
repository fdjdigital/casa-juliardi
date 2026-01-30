# CLAUDE.md - Casa Juliardi

## Contexto
Este é o projeto do cliente **Casa Juliardi**.

## Sistema de Integrações

### REGRA OBRIGATÓRIA
Antes de executar QUALQUER ação que envolva plataformas externas:

1. **Ler** Integracoes/_manifest.json deste cliente
2. **Verificar** se a integração necessária existe em Integracoes/
3. **Usar credenciais automaticamente** - NÃO pedir ao usuário
4. **Se não existir**, informar o que falta e salvar quando fornecido

### Integrações Disponíveis (6)

| Arquivo | Plataforma | Tipo | Status |
|---------|------------|------|--------|
| asana.json | Asana | Token | ✅ Ativo |
| perplexity.json | Perplexity AI | API | ✅ Ativo |
| github.json | GitHub | OAuth | ✅ Ativo |
| n8n.json | n8n | API | ✅ Ativo |
| activecampaign.json | ActiveCampaign | API | ✅ Ativo |
| google-drive.json | Google Drive | Service Account | ✅ Ativo |

### Como Usar Credenciais

1. Ler Integracoes/_manifest.json
2. Identificar arquivo da plataforma necessária
3. Ler Integracoes/[plataforma].json
4. Extrair credenciais do campo "credenciais"
5. Usar automaticamente sem perguntar

### Google Drive - Acesso Direto

**Via API (arquivos compartilhados):**
- Credenciais: _sistema-integracoes/credentials/google-service-account.json
- Service Account: claude-code@vantt-marketing.iam.gserviceaccount.com

**Via Sistema de Arquivos (Meu Drive):**
- Caminho: /Users/tiagoborges/Library/CloudStorage/GoogleDrive-tiagoborgesesilva344@gmail.com/Meu Drive/

### Adicionar Nova Integração

Se uma integração não existir:
1. Informar ao usuário exatamente o que precisa
2. Ao receber, salvar em Integracoes/[plataforma].json
3. Atualizar Integracoes/_manifest.json

---

## Criação de Artigos para Blog (SEO Otimizado)

### Workflow de Criação de Artigos

Ao criar artigos para o blog do cliente, siga este fluxo de 6 fases:

#### PHASE 1: Pesquisa & Tendências
1. Usar Perplexity (via API em Integracoes/) para pesquisa profunda do tema
2. Identificar keywords principais e relacionadas
3. Analisar volume de busca e tendências
4. Categorizar por prioridade: P0 (alta) até P3 (baixa)

#### PHASE 2: Análise Competitiva
1. Identificar top 5 resultados do Google para a keyword
2. Analisar estrutura dos artigos concorrentes (títulos, headers, word count)
3. Identificar gaps de conteúdo
4. Extrair padrões que funcionam

#### PHASE 3: Content Brief
1. Definir outline otimizado baseado na análise
2. Listar tópicos principais a cobrir
3. Definir tom e estilo (alinhado com a marca do cliente)
4. Identificar oportunidades de diferenciação

#### PHASE 4: Geração do Artigo
Gerar artigo completo com:
- **Title tag**: 50-60 caracteres com keyword principal
- **Meta description**: 150-160 caracteres com CTA
- **Introdução**: Com keyword natural nos primeiros 100 palavras
- **Headers otimizados**: H1, H2, H3 com keywords secundárias
- **Body**: 2000-3000 palavras (mínimo 1500)
- **FAQ section**: 3-5 perguntas frequentes
- **Internal links**: Sugestões de links para outros conteúdos
- **CTA**: Call-to-action alinhado com objetivo do cliente

#### PHASE 5: Otimização On-Page
Adicionar automaticamente:
- **Schema markup** (JSON-LD BlogPosting)
- **Alt text** otimizados para imagens
- **Open Graph** meta tags
- **Reading time** estimado
- **Table of Contents** (se artigo > 2000 palavras)

#### PHASE 6: Publicação
1. Salvar artigo em `public_html/blog/[slug-do-artigo]/index.html`
2. Atualizar index do blog
3. Fazer commit e push para GitHub
4. Verificar deploy no GitHub Pages

### Diretrizes de SEO

**Densidade de Keywords:**
- Keyword principal: 1-2% do conteúdo
- Keywords secundárias (LSI): 0.5-1%

**Legibilidade:**
- Frases com máximo 25 palavras
- Parágrafos com máximo 4 linhas
- Vocabulário acessível ao público-alvo

**Estrutura:**
- 1 H1 (título principal)
- 3-6 H2 (seções principais)
- H3 conforme necessário (subseções)

### Prompt para Pesquisa no Perplexity

Ao iniciar criação de artigo, usar este template:

```
Pesquise de forma aprofundada sobre [TEMA] para o mercado brasileiro, incluindo:

1. Panorama geral do tema (estatísticas, tendências)
2. Principais dúvidas e problemas do público
3. Soluções e melhores práticas
4. Dados e estatísticas relevantes
5. Fontes confiáveis para referência
6. Keywords relacionadas para SEO
7. Perguntas frequentes (FAQ)

Foco em informações práticas e atualizadas para [PÚBLICO-ALVO DO CLIENTE].
```
