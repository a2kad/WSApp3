import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function PolitiqueScreen() {
    const navigation = useNavigation();
    return (
        <SafeAreaProvider style={styles.container}>
            <ScrollView>
                <View style={styles.paragraph}>
                    <Text style={styles.paragraphText}>
                    Web Solidarité a créé l'application Web Solidarité en tant qu'application gratuite. Ce SERVICE est fourni par Web Solidarité à titre gratuit et est destiné à être utilisé "en l'état".
                    </Text>
                    <Text style={styles.paragraphText}>
                    Cette page est utilisée pour informer les visiteurs de mes politiques concernant la collecte, l'utilisation et la divulgation d'informations personnelles si quelqu'un choisit d'utiliser notre Service.
                    </Text>
                    <Text style={styles.paragraphText}>
                    Si vous choisissez d'utiliser notre service, vous consentez à la collecte et à l'utilisation d'informations dans le cadre de cette politique. Les informations personnelles que nous recueillons sont utilisées pour fournir et améliorer le service. Nous n'utiliserons ni ne partagerons vos informations avec quiconque, sauf dans les cas décrits dans la présente politique de confidentialité.
                    </Text>
                    <Text style={styles.paragraphText}>
                    Les termes utilisés dans la présente politique de confidentialité ont la même signification que dans nos conditions générales, qui sont disponibles sur le site Web Solidarité, sauf définition contraire dans la présente politique de confidentialité.
                    </Text>
                </View>
                <View style={styles.paragraph}>
                    <Text style={styles.paragraphTitle}>
                        Collecte et utilisation des informations
                    </Text>
                    <Text style={styles.paragraphText}>
                    Pour faciliter l'utilisation de notre service, nous pouvons vous demander de nous fournir certaines informations personnelles. Les informations que nous demandons seront stockées sur votre appareil et ne seront pas collectées par nous de quelque manière que ce soit.
                    </Text>
                    <Text style={styles.paragraphText}>
                    L'application utilise des services tiers qui peuvent collecter des informations permettant de vous identifier.
                    </Text>
                    <Text style={styles.paragraphText}>
                    Lien vers les politiques de confidentialité des fournisseurs de services tiers utilisés par l'application :
                    </Text>
                    <Text style={styles.paragraphList}>- Google Play Services</Text>
                    <Text style={styles.paragraphList}>- Expo</Text>
                </View>
                <View style={styles.paragraph}>
                    <Text style={styles.paragraphTitle}>Données du journal</Text>
                    <Text style={styles.paragraphText}>
                    Nous aimerions vous informer qu'à chaque fois que vous utilisez notre service, en cas d'erreur dans l'application, nous collectons des données et des informations (via des produits tiers) sur votre téléphone, appelées données de connexion (Log Data). Ces données de journal peuvent inclure des informations telles que l'adresse de protocole Internet ("IP") de votre appareil, le nom de l'appareil, la version du système d'exploitation, la configuration de l'application lorsque vous utilisez mon service, l'heure et la date auxquelles vous avez utilisé le service, ainsi que d'autres statistiques. 
                    </Text>
                </View>

                <View style={styles.paragraph}>
                    <Text style={styles.paragraphTitle}>
                        Cookies
                    </Text>
                    <Text style={styles.paragraphText}>
                    Les cookies sont des fichiers contenant une petite quantité de données qui sont généralement utilisés comme identifiants uniques anonymes. Ils sont envoyés à votre navigateur par les sites web que vous visitez et sont stockés dans la mémoire interne de votre appareil.
                    </Text>
                    <Text style={styles.paragraphText}>
                    Ce service n'utilise pas explicitement ces cookies. Cependant, l'application peut utiliser des codes et des bibliothèques de tiers qui utilisent des cookies pour collecter des informations et améliorer ses services. Vous avez la possibilité d'accepter ou de refuser ces cookies et de savoir quand un cookie est envoyé à votre appareil. Si vous choisissez de rejeter nos cookies, il se peut que vous ne puissiez pas utiliser certaines parties de notre service.
                    </Text>
                </View>

                <View style={styles.paragraph}>
                    <Text style={styles.paragraphTitle}>
                        Les fournisseurs de services
                    </Text>
                    <Text style={styles.paragraphText}>
                    Nous pouvons engager des sociétés et des personnes tierces pour les raisons suivantes :
                    </Text>
                    <Text style={styles.paragraphList}>
                        - Pour faciliter notre Service;
                    </Text>
                    <Text style={styles.paragraphList}>
                        - Pour fournir le Service en notre nom;
                    </Text>
                    <Text style={styles.paragraphList}>
                        - Pour fournir des services liés au service ; ou
                    </Text>
                    <Text style={styles.paragraphList}>
                        - Pour nous aider à analyser l'utilisation de notre service.
                    </Text>
                    <Text></Text>
                    <Text style={styles.paragraphText}>
                    Nous souhaitons informer les utilisateurs de ce service que ces tiers ont accès à leurs informations personnelles. La raison en est l'accomplissement des tâches qui leur sont assignées en notre nom. Toutefois, ils sont tenus de ne pas divulguer ou utiliser ces informations à d'autres fins.
                    </Text>
                </View>

                <View style={styles.paragraph}>
                    <Text style={styles.paragraphTitle}>
                    Sécurité
                    </Text>
                    <Text style={styles.paragraphText}>
                    Nous apprécions la confiance que vous nous accordez en nous fournissant vos informations personnelles et nous nous efforçons donc d'utiliser des moyens commercialement acceptables pour les protéger. Mais n'oubliez pas qu'aucune méthode de transmission sur l'internet ou de stockage électronique n'est sûre à 100 % et que nous ne pouvons pas garantir une sécurité absolue.
                    </Text>
                </View>

                <View style={styles.paragraph}>
                    <Text style={styles.paragraphTitle}>
                    Liens vers d'autres sites
                    </Text>
                    <Text style={styles.paragraphText}>
                    Ce service peut contenir des liens vers d'autres sites. Si vous cliquez sur un lien externe, vous serez redirigé vers ce site. Veuillez noter que ces sites externes ne sont pas exploités par nous. Par conséquent, nous vous conseillons vivement de lire les politiques de confidentialité de ces sites. Nous n'avons aucun contrôle sur le contenu, les politiques de confidentialité ou les pratiques des sites ou services tiers, et nous n'en sommes pas responsables.
                    </Text>
                </View>

                <View style={styles.paragraph}>
                    <Text style={styles.paragraphTitle}>
                    Protection de la vie privée des enfants
                    </Text>
                    <Text style={styles.paragraphText}>
                    Ces services ne sont pas destinés aux personnes de moins de 13 ans. Nous ne recueillons pas sciemment d'informations personnelles auprès d'enfants de moins de 13 ans. Si je découvre qu'un enfant de moins de 13 ans nous a fourni des informations personnelles, nous les supprimons immédiatement de nos serveurs. Si vous êtes un parent ou un tuteur et que vous savez que votre enfant nous a fourni des informations personnelles, veuillez nous contacter afin que nous puissions prendre les mesures nécessaires.
                    </Text>
                </View>

                <View style={styles.paragraph}>
                    <Text style={styles.paragraphTitle}>
                    Modifications de la présente politique de confidentialité
                    </Text>
                    <Text style={styles.paragraphText}>
                    Nous pouvons mettre à jour notre politique de confidentialité de temps à autre. Il est donc recommandé de consulter régulièrement cette page pour prendre connaissance d'éventuelles modifications. Nous vous informerons de toute modification en publiant la nouvelle politique de confidentialité sur cette page.
                    </Text>
                    <Text style={styles.paragraphText}>
                    Cette politique entre en vigueur le 17/10/2023
                    </Text>
                </View>
                <View style={styles.paragraph}>
                    <Text style={styles.paragraphTitle}>
                    Nous contacter
                    </Text>
                    <Text style={styles.paragraphText}>
                    Si vous avez des questions ou des suggestions concernant notre politique de confidentialité, veuillez nous envoyer un courriel à <Text style={{fontWeight:'bold'}}>websolidarite.app@gmail.com</Text>.
                    </Text>
                </View>
                <View style={styles.paragraph}>
                    <TouchableOpacity onPress={()=>{navigation.goBack()}} className="py-3 bg-yellow-400 mx-7 rounded-xl">
                        <Text className="text-xl font-bold text-center text-gray-700">Retour</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        margin: 20,

    },
    paragraph: {
        marginBottom: 20
    },
    paragraphTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 20
    },
    paragraphText: {
        fontSize: 17,
        marginBottom: 20
    },
    paragraphList: {
        fontSize: 17,
        marginLeft: 20
    },
})