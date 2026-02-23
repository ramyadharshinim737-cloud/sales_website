pipeline {
    agent any
    stages {
        stage('Deploy') {
            steps {
                script {
                    // 'docker-compose' badhula 'docker compose' try pannuvom
                    sh 'docker compose down || true'
                    sh 'docker compose up -d --build'
                }
            }
        }
    }
}
