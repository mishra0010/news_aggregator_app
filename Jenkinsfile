pipeline {
    agent any

    environment {
        NEWS_API_KEY = credentials('NEWS_API_KEY') // optional
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/<your-username>/news-aggregator.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                echo 'Building Docker images...'
                sh 'docker compose build'
            }
        }

        stage('Deploy Containers') {
            steps {
                echo 'Deploying containers...'
                sh 'docker compose up -d'
            }
        }

        stage('Cleanup Old Images') {
            steps {
                echo 'Cleaning up old Docker images...'
                sh 'docker image prune -f'
            }
        }
    }

    post {
        success {
            echo '✅ Build and deployment successful!'
        }
        failure {
            echo '❌ Build failed, please check logs.'
        }
    }
}

