import React, { useState, useEffect } from "react";

import sport_icon from '../assets/icons/sport_icon.svg'
import sport_arenas from '../assets/sport/sport_arenas.png'

import { Header } from "../components/header";
import { Title } from "../components/title";
import { SpoortCard } from "../components/sport-card";
import { Footer } from "../components/footer"
import { Wrapper } from "../global-styles";
import { ErrorBoundary } from "../components/error-boundary";
import { URLs } from "../__data__/urls";

const Sport = () => {

    const [sportCard, setSportCard] = useState([])
    useEffect(() => {
        fetch(`${URLs.api.main}/getSportData`).then((response) => response.json()).then((data) => setSportCard(data))
    }, [])

    return (
        <>
            <Header />
            <Wrapper>
                <Title image={sport_icon} title="Спорт и развлечения" alt="спортивная иконка" />
                <ErrorBoundary>
                    <div className="text">
                        <h2>Казань - спортивная столица России</h2>
                        <p> Республики Татарстан, является одним из самых развитых в спортивном плане городов России, а также одним из лидеров по числу побед в различных видах спорта. </p>
                        <p> И это вполне заслужено: в городе проходили Универсиада, Чемпионат мира FINA по водным видам спорта, матчи Кубка конфедераций FIFA, Чемпионата мира по футболу и другое. Все эти события способствовали спортивному обустройству города и развитию инфраструктуры в сфере спорта.</p>
                    </div>
                    <h1> Спортивные команды и клубы Казани </h1>
                    <ErrorBoundary>
                        {sportCard.map((item, index) => (
                            <SpoortCard key={index}
                                type={item.type}
                                title={item.title}
                                text={item.text}
                                logo={item.logo}
                                logo_alt={item.logo_alt}
                                image={item.image}
                                img_alt={item.img_alt}
                                link={item.link}
                            >
                            </SpoortCard>
                        ))}
                    </ErrorBoundary>
                    <div className="text">
                        <p>В 2020 году в Казани состоятся первые в истории спортивные игры стран Содружества независимых государств (СНГ).  Впервые в истории существования стран СНГ пройдет подобного рода спортивное соревнование, которое объединит их все.  По инициативе Министерства спорта РФ и по поручению Президента РФ  В.В.  Путина Министерство спорта РТ  (совместно с федеральным спортивным ведомством) подготовили  проект, который был утвержден  на правительственной комиссии. Соревнования пройдут в олимпийский год, к тому же в рамках празднования 100-летия ТАССР.  Сроки проведения соревнований — 20-27 августа 2020 года.  На Играх выступят сборные России, Азербайджана, Армении, Белоруссии, Казахстана, Кыргызстана, Молдовы, Таджикистана, Туркменистана, Узбекистана и Украины. </p>
                        <p>В программе соревнований: дзюдо, самбо, пляжный волейбол, пляжный гандбол, мини-футбол, бокс, тайский бокс, шахматы, танцевальный спорт, фехтование, каратэ, гиревой спорт, армрестлинг, мас-реслинг, спортивная борьба, борьба на поясах (корэш), легкая атлетика и баскетбол (3х3).</p>
                        <p>Казани удаётся удивительным образом сочетать в себе исторические традиции и современность, удобства мегаполиса и гостеприимную атмосферу.  Но одни из самых главных достижений столицы Татарстана – это крупные спортивные мероприятия, регулярно проводимые на территории города. Ни в одном городе России нет такого количества монументальных и современных спортивных объектов.</p>
                        <p>Толчком к развитию спортивной инфраструктуры столицы Татарстана стала Универсиада 2013 года. Это было первое соревнование мирового уровня для Казани.
                            Казанская Универсиада была признана лучшей за всю историю проведения студенческих игр. Об этом заявил президент Международной федерации студенческого спорта Клод-Луи Гальен.
                            Город развернул масштабную стройку, не уступающую в размерах подготовке к Олимпиаде 2014 года в Сочи. Буквально на глазах жителей выросли новый стадион «Казань-Арена»,  Дворец единоборств «Ак Барс» и Дворец водных видов спорта, в котором проводили соревнования по плаванию, прыжкам в воду, синхронному плаванию и водному поло. Успех Универсиады позволил Казани принимать ещё более масштабные мероприятия. После проведения Всемирных студенческих игр Казань обладает всей необходимой инфраструктурой для проведения будущих спортивных мегасобытий.</p>
                    </div>
                </ErrorBoundary>
            </Wrapper>
            <img src={sport_arenas} className="collage-full-width" alt="Фоторгафия различных спортивных арен Казани" />
            <Footer />
        </>
    );
};

export default Sport;
