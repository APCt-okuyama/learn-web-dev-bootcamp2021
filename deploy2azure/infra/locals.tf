# ローカル変数
# project name
resource "random_string" "projectno" {
  length = 5
  upper   = false
  lower   = false
  numeric  = true
  special = false  
}

# 関数や他リソースの参照などが利用可能
locals {
  rg_name = "oku-b2c-example1-${random_string.projectno.result}"
  location = "japaneast"

  # cosmos
  cosmos_account_name = "cosmos-account-${random_string.projectno.result}"
  cosmos_db_name = "cosmos-db-${random_string.projectno.result}"  

  # app service
  appservice_plan_name = "appsrv-plan-${random_string.projectno.result}"
  appservice_name = "appsrv-sampleapp-${random_string.projectno.result}"

  # key vault
  keyvault_name = "example-kv-${random_string.projectno.result}"

  # azure storage blob

  blob_storage_ac_name = "examplestorageacc${random_string.projectno.result}"
  spa_container_name = "spa-container-${random_string.projectno.result}"  
  spa_index_document_name = "index.html"
}
