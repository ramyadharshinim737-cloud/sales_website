pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps { git git 'https://github.com/ramyadharshinim737-cloud/sales_website.git' }
        }
        stage('Deploy') {
            steps {
                // Docker compose moolama frontend & backend rendaiyum start pannum
                sh 'docker-compose down || true'
                sh 'docker-compose up -d --build'
            }
        }
    }
