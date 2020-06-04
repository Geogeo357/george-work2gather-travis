import React from 'react';
import { render, fireEvent, waitForElement, screen, wait} from '@testing-library/react'
import SeeMore from './SeeMore';
import '@testing-library/jest-dom/extend-expect'
import { ExpansionPanelActions } from '@material-ui/core';

// src/__tests__/example.js
// query utilities:
import {
    getByLabelText,
    getByText,
    getByTestId,
    queryByTestId,
    // Tip: all queries are also exposed on an object
    // called "queries" which you could import here as well
    waitFor,
  } from '@testing-library/dom'
  // adds special assertions like toHaveTextContent
  import '@testing-library/jest-dom/extend-expect'

test('renders appropriate more info dialog', async () => {
    var goal = {
        "confirmed": true,
        "startDate": "02/01/2020",
        "endDate": "",
        "duration": 2,
        "progress":{
            "user1":
                [
                    5,
                    5,
                    4,
                    7,
                    3,
                    12,
                    132,
                    11,
                    1,
                    8,
                    9,
                    7,
                    3,
                    8
                ],
            "user2":
                [
                    1,
                    2,
                    5,
                    9,
                    6,
                    4,
                    3,
                    2,
                    11,
                    3,
                    12,
                    12,
                    10,
                    8
                ]
        },
        "title": "Do Daily Pushups, Yay",
        "description": "Do 10 pushups a day.",
        "groupMembers": {
            "creator": "user1",
            "invitee": "user2"
        }
    };
    render(<SeeMore goal={goal} />)
    fireEvent.click(screen.getByText('See More'))
    waitForElement(() => screen.getByText('Close')).then(fireEvent.click(screen.getByText('Close'))).catch(fireEvent.click(screen.getByText('Close')))
    // this link above would fail if the dialog didn't show up, so this is a valid test :)
    
});

test('clicking the see more button opens the dialog for it', async () => {
    var goal = {
        "confirmed": true,
        "startDate": "02/01/2020",
        "endDate": "",
        "duration": 2,
        "progress":{
            "user1":
                [
                    5,
                    5,
                    4,
                    7,
                    3,
                    12,
                    132,
                    11,
                    1,
                    8,
                    9,
                    7,
                    3,
                    8
                ],
            "user2":
                [
                    1,
                    2,
                    5,
                    9,
                    6,
                    4,
                    3,
                    2,
                    11,
                    3,
                    12,
                    12,
                    10,
                    8
                ]
        },
        "title": "Do Daily Pushups, Yay",
        "description": "Do 10 pushups a day.",
        "groupMembers": {
            "creator": "user1",
            "invitee": "user2"
        }
    };
    render(<SeeMore goal={goal} />)
    fireEvent.click(screen.getByText('See More'));
    // this link above would fail if the dialog didn't show up, so this is a valid test :)
    await waitForElement(() => screen.getByText('Close'))
    await waitForElement(() => screen.getByTestId('SeeMoreBarChart'))
    fireEvent.click(screen.getByText('Line'))
    await waitForElement(() => screen.getByTestId('SeeMoreLineChart'))
    fireEvent.click(screen.getByText('Bar'))

});
