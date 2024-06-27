pipeline {
    agent any
    stages {
        stage("setup environment") {
            steps {
                script {
                    if (isUnix()) {
                        sh '''
                            docker version
                            docker-compose version
                            docker info
                            curl --version
                        '''
                    } else {
                        bat '''
                            docker version
                            docker-compose version
                            docker info
                            curl --version
                        '''
                    }
                }
            }
        }
        stage('Prune Docker data') {
            steps {
                script {
                    if (isUnix()) {
                        sh '''
                            if [ $(docker ps -a -q -f name=react) ]; then
                                echo "Removing container 'react'..."
                                docker rm -f 'react'
                            else
                                echo "Container 'react' does not exist."
                            fi
                            
                            if [ $(docker images -q react:latest) ]; then
                                echo "Removing image 'react:latest'..."
                                docker rmi -f react:latest
                            else
                                echo "Image 'react:latest' does not exist."
                            fi
                        '''
                    } else {
                        bat '''
                            for /f "tokens=*" %i in ('docker ps -a -q -f name=react') do set DOCKER_CONTAINER=%i
                            if defined DOCKER_CONTAINER (
                                echo "Removing container 'react'..."
                                docker rm -f 'react'
                            ) else (
                                echo "Container 'react' does not exist."
                            )
                            
                            for /f "tokens=*" %i in ('docker images -q react:latest') do set DOCKER_IMAGE=%i
                            if defined DOCKER_IMAGE (
                                echo "Removing image 'react:latest'..."
                                docker rmi -f react:latest
                            ) else (
                                echo "Image 'react:latest' does not exist."
                            )
                        '''
                    }
                }
            }
        }
        stage('Start container') {
            steps {
                script {
                    if (isUnix()) {
                        sh '''
                            cd device_app
                            
                            docker build -t react:latest .
                            
                            docker run -d \
                            -p 3001:3001 \
                            --name react \
                            -e REACT_APP_RABBITMQ_PORT=3002 \
                            -e PORT=3001 \
                            react:latest
                            
                            docker ps
                        '''
                    } else {
                        bat '''
                            cd device_app
                            
                            docker build -t react:latest .
                            
                            docker run -d ^
                            -p 3001:3001 ^
                            --name react ^
                            -e REACT_APP_RABBITMQ_PORT=3002 ^
                            -e PORT=3001 ^
                            react:latest
                            
                            docker ps
                        '''
                    }
                }
            }
        }
    }
    post {
        success {
            emailext body: "Build ${currentBuild.fullDisplayName} succeeded",
                     subject: "${env.JOB_NAME} - Build #${env.BUILD_NUMBER} - Successful",
                     to: 'dronecraftbr10@gmail.com',
                     attachLog: true
        }
        failure {
            emailext body: "Build ${currentBuild.fullDisplayName} failed",
                     subject: "${env.JOB_NAME} - Build #${env.BUILD_NUMBER} - Failed",
                     to: 'dronecraftbr10@gmail.com',
                     attachLog: true
        }
        unstable {
            emailext body: "Build ${currentBuild.fullDisplayName} is unstable",
                     subject: "${env.JOB_NAME} - Build #${env.BUILD_NUMBER} - Unstable",
                     to: 'dronecraftbr10@gmail.com',
                     attachLog: true
        }
        always {
            emailext body: "Build ${currentBuild.fullDisplayName} has finished with status ${currentBuild.currentResult}",
                     subject: "${env.JOB_NAME} - Build #${env.BUILD_NUMBER} - ${currentBuild.currentResult}",
                     to: 'dronecraftbr10@gmail.com',
                     attachLog: true
        }
    }
}
