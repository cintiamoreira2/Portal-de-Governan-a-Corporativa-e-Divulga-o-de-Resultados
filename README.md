# GovReport.NET

Portal de Governança Corporativa e Divulgação de Resultados, voltado para empresas listadas simularem a publicação de documentos oficiais.

## 🧱 Tecnologias Usadas

- .NET 6 (Web API)
- SQL Server
- Docker + Docker Compose
- AngularJS + HTML/CSS
- Kafka para mensageria
- Azure (opcional)
- Git + GitHub Actions
- Jira + Confluence

## 📦 Funcionalidades

- Autenticação via JWT
- Upload e versionamento de documentos
- Dashboard para empresas emissoras
- Consulta pública por CNPJ, tipo e data
- Mensageria e arquitetura desacoplada com microserviços

## 📚 Instalação

```bash
git clone https://github.com/seuusuario/govreport-dotnet.git
cd govreport-dotnet
docker-compose up --build
