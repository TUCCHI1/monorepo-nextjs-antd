terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 4.0"
    }
  }
}

provider "google" {
  project = var.project_id
  region  = var.region
}

# Next.jsアプリ用Cloud Runサービス
resource "google_cloud_run_service" "nextjs_app" {
  name     = "nextjs-app"
  location = var.region

  template {
    spec {
      containers {
        image = var.image_name
        
        resources {
          limits = {
            cpu    = "1"
            memory = "512Mi"
          }
        }
        
        env {
          name  = "NODE_ENV"
          value = "production"
        }
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }
}

# Cloud Runサービスを公開アクセス可能に
resource "google_cloud_run_service_iam_member" "public_access" {
  service  = google_cloud_run_service.nextjs_app.name
  location = google_cloud_run_service.nextjs_app.location
  role     = "roles/run.invoker"
  member   = "allUsers"
}

# デプロイされたサービスのURLを出力
output "service_url" {
  value = google_cloud_run_service.nextjs_app.status[0].url
}