import React from 'react';
import {useTranslation} from "react-i18next";
import {DynamicModuleLoader, ReducersList} from "shared/components/DynamicModuleLoader/DynamicModuleLoader";
import {profileReducer} from "entities/Profile";

const reducers: ReducersList = {
    profile: profileReducer,
}

function ProfilePage() {
    const {t} = useTranslation('profile');

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <>
                <div>{t('Страница пользователя')}</div>
            </>
        </DynamicModuleLoader>

    );
}

export default ProfilePage;