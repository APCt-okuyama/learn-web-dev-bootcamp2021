# variable "rg_name" {}
# variable "location" {
#   default = "japaneast"
# }

variable "mapboxapitoken" {
    description = "mapbox api token"
    type = string
    sensitive = true
}