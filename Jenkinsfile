pipeline {
    agent any

    stages {
        stage('Deploy') {
            steps {
                script {
                    // GitHub-la folders clean-ah irundha 'dir' thevai illai. 
                    // Direct-ah compose up pannalaam.
                    sh 'docker-compose down || true'
                    sh 'docker-compose up -d --build'
                }
            }
        }
    }
}
