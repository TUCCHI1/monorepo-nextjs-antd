variable "project_id" {
  description = "GCPプロジェクトID"
  type        = string
}

variable "region" {
  description = "GCPリージョン"
  type        = string
  default     = "us-central1"
}

variable "image_name" {
  description = "デプロイするDockerイメージ名"
  type        = string
}