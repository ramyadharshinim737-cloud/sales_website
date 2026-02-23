pipeline {
    agent any
    stages {
        stage('Deploy') {
            steps {
                script {
                    // Forcefully stop and remove existing containers
                    sh 'docker ps -q | xargs -r docker stop || true'
                    sh 'docker ps -a -q | xargs -r docker rm || true'
                    
                    // Build and Run using Dockerfile directly (since compose is failing)
                    dir('backend') {
                        sh 'docker build -t sales-backend .'
                        sh 'docker run -d -p 3000:3000 --name sales-backend sales-backend'
                    }
                    dir('frontend') {
                        sh 'docker build -t sales-frontend .'
                        sh 'docker run -d -p 80:80 --name sales-frontend sales-frontend'
                    }
                }
            }
        }
    }
}
