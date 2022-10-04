output "my-output-message" {
  description = "app service へのデプロイ用の azコマンド のサンプルが出力されます"
  # deploy コマンドの例
  value       = "(deploy app): az webapp up -n ${local.appservice_name} -g ${local.rg_name} -p ${local.appservice_plan_name} -l ${local.location}"
}