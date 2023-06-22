# `기요미니상` - `Relief`

해커그라운드 해커톤에 참여하는 `기요미니상` 팀의 `Relief`입니다.

## 참고 문서

> 아래 두 링크는 해커톤에서 앱을 개발하면서 참고할 만한 문서들입니다. 이 문서들에서 언급한 서비스 이외에도 더 많은 서비스들이 PaaS, SaaS, 서버리스 형태로 제공되니 참고하세요.

- [순한맛](./REFERENCES_BASIC.md)
- [매운맛](./REFERENCES_ADVANCED.md)

## 제품/서비스 소개

<!-- 아래 링크는 지우지 마세요 -->
[제품/서비스 소개 보기](TOPIC.md)
<!-- 위 링크는 지우지 마세요 -->

## 오픈 소스 라이센스

<!-- 아래 링크는 지우지 마세요 -->
[오픈소스 라이센스 보기](./LICENSE)
<!-- 위 링크는 지우지 마세요 -->

## 설치 방법

> **아래 제공하는 설치 방법을 통해 심사위원단이 여러분의 제품/서비스를 실제 Microsoft 애저 클라우드에 배포하고 설치할 수 있어야 합니다. 만약 아래 설치 방법대로 따라해서 배포 및 설치가 되지 않을 경우 본선에 진출할 수 없습니다.**

### 사전 준비 사항

> **여러분의 제품/서비스를 Microsoft 애저 클라우드에 배포하기 위해 사전에 필요한 준비 사항들을 적어주세요.**
 - npm
 - Node js
 - GitHub Account
 - Azure Account
 - Azure CLI

## 시작하기

> **여러분의 제품/서비스를 Microsoft 애저 클라우드에 배포하기 위한 절차를 구체적으로 나열해 주세요.**
 1. 해당 레포지토리를 fork 한다(repository_name 동일하게)
 2. 아래 명령어를 순서대로 Azure 리소스를 생성합니다(
```
$GITHUB_USERNAME = ""
$RESOURCE_GROUP_NAME = "rg-hg-minisang"
$LOCATION = "koreacentral"
$WEBAPP_NAME = "jikeemeapi"
$PUBLISH_PATH = ""

az login
az group create --name $RESOURCE_GROUP_NAME --location $LOCATION
az webapp create --resource-group $RESOURCE_GROUP_NAME --name $WEBAPP_NAME --location $LOCATION --plan B1 --runtime "NODE|18-lts"
az webapp config set --name $WEBAPP_NAME --resource-group $RESOURCE_GROUP_NAME --startup-file "npm start"
az webapp deployment source config --name $WEBAPP_NAME --resource-group $RESOURCE_GROUP_NAME --repo-url "https://github.com/$GITHUB_USERNAME/minisang.git" --branch "main" --manual-integration
az webapp deployment workflow set --name $WEBAPP_NAME --resource-group $RESOURCE_GROUP_NAME --branch main --workflow-name <WORKFLOW_NAME>
az webapp workflow show --name $WEBAPP_NAME --resource-group $RESOURCE_GROUP_NAME --workflow-name "azure-webapps-node" --repository-url "https://github.com/$GITHUB_USERNAME/minisang.git" --repository-type "GitHub" --file-path .github/workflows/azure-webapps-node.yml
az webapp deployment list-publishing-profiles --name $WEBAPP_NAME --resource-group $RESOURCE_GROUP_NAME --xml --output $PUBLISH_PATH
```
 3. [azaure](https://portal.azure.com)으로 접속하여 자동으로 생성된 rg-hg-minisang 리소스 그룹 안에 `jikeemeapi` 리소스를 클릭한다.
 4. 게시 프로필을 다운하여 안의 값을 전부 복사한다.
 5. 1번에서 fork한 레포지토리에서 settings -> Secrets and variables -> Actions 탭으로 이동하여 `New repository secret` 초록 버튼을 누른다.
 6. `Name` 칸에는 `AzureAppService_PublishProfile_c8f24da23f794de8a01db4458907992e`을 입력하고 `secret` 칸에는 4번에서 복사한 값을 붙여 넣고 `Add secret` 초록 버튼을 누른다.
