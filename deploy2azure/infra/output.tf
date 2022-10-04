output "my-output-message" {
  description = "this is my output message"
  # deploy コマンドの例
  value       = "(deploy app): az webapp up -n ${local.appservice_name} -g ${local.rg_name} -p ${local.appservice_plan_name} -l ${local.location}"
}